import os
import re

html_dir = '../stitch-screens/html'
out_dir = './src/pages'
components_dir = './src/components'

os.makedirs(out_dir, exist_ok=True)
os.makedirs(components_dir, exist_ok=True)

html_files = [f for f in os.listdir(html_dir) if f.endswith('.html')]

def html_to_jsx(html):
    # Convert class to className
    jsx = html.replace('class="', 'className="')
    # Convert for to htmlFor
    jsx = jsx.replace('for="', 'htmlFor="')
    # Self-closing tags (img, input, hr, br, link, meta)
    jsx = re.sub(r'<(img|input|hr|br|link|meta)([^>]*?)(?<!/)>', r'<\1\2 />', jsx)
    # Convert inline styles (simplified, assuming they are basic or we can just remove/fix them)
    # Most of the design uses tailwind, but let's fix the font-variation-settings style
    jsx = jsx.replace('style="font-variation-settings: \'FILL\' 1;"', "style={{ fontVariationSettings: \"'FILL' 1\" }}")
    # Fix stroke-width -> strokeWidth
    jsx = jsx.replace('stroke-width=', 'strokeWidth=')
    jsx = jsx.replace('stroke-linecap=', 'strokeLinecap=')
    jsx = jsx.replace('stroke-linejoin=', 'strokeLinejoin=')
    # Replace html comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)
    
    # Replace href="filename.html" with to="/filename" (Wait, we can use <a> for now and react-router will work if we use <Link>, but let's stick to <a> or replace with <Link>). Let's use <a> for now.
    
    return jsx

# Extract Nav and Footer from one of the files (e.g. 04-landing-page.html)
with open(os.path.join(html_dir, '04-landing-page.html'), 'r', encoding='utf-8') as f:
    content = f.read()

# Extract <nav>...</nav>
nav_match = re.search(r'(<nav.*?</nav>)', content, re.DOTALL)
footer_match = re.search(r'(<footer.*?</footer>)', content, re.DOTALL)

nav_jsx = html_to_jsx(nav_match.group(1)) if nav_match else ""
footer_jsx = html_to_jsx(footer_match.group(1)) if footer_match else ""

with open(os.path.join(components_dir, 'Header.jsx'), 'w', encoding='utf-8') as f:
    f.write(f'''export default function Header() {{
    return (
        {nav_jsx}
    );
}}''')

with open(os.path.join(components_dir, 'Footer.jsx'), 'w', encoding='utf-8') as f:
    f.write(f'''export default function Footer() {{
    return (
        {footer_jsx}
    );
}}''')

routes = []
imports = []

for file in html_files:
    with open(os.path.join(html_dir, file), 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract <main>...</main>
    main_match = re.search(r'(<main.*?</main>)', content, re.DOTALL)
    if not main_match:
        # If no main, extract body content between nav and footer, or just body
        body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
        if body_match:
            body_content = body_match.group(1)
            # Remove nav and footer
            body_content = re.sub(r'<nav.*?</nav>', '', body_content, flags=re.DOTALL)
            body_content = re.sub(r'<footer.*?</footer>', '', body_content, flags=re.DOTALL)
            main_content = body_content.strip()
        else:
            main_content = content
    else:
        main_content = main_match.group(1)
        
    jsx = html_to_jsx(main_content)
    
    # Page name
    page_name = file.replace('.html', '').title().replace('-', '')
    # Handle numbers starting page names
    if page_name[0].isdigit():
        page_name = 'Page' + page_name
        
    imports.append(f"import {page_name} from './pages/{page_name}';")
    routes.append(f"          <Route path=\"/{file}\" element={{<{page_name} />}} />")
    
    # We will use Link from react-router-dom later, but for now <a> works with standard routing
    
    # Write page component
    with open(os.path.join(out_dir, f'{page_name}.jsx'), 'w', encoding='utf-8') as f:
        f.write(f'''export default function {page_name}() {{
    return (
        <>
            {jsx}
        </>
    );
}}''')

# Write App.jsx
app_jsx = f'''import {{ BrowserRouter as Router, Routes, Route, Navigate }} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
{chr(10).join(imports)}

function App() {{
  return (
    <Router>
      <div className="dark antialiased min-h-screen flex flex-col font-body-md text-body-md overflow-x-hidden selection:bg-tertiary selection:text-on-tertiary text-on-background">
        <Header />
        <Routes>
          <Route path="/" element={{<Navigate to="/08-main-landing-page.html" />}} />
{chr(10).join(routes)}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}}

export default App;
'''

with open('./src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_jsx)

print("HTML to React conversion completed!")
