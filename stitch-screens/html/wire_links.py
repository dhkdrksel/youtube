import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# List of regex patterns and their target HTML pages
# We use re.DOTALL to match across newlines inside <a> tags
replacements = [
    (r'href="#"([^>]*>.*?AETHER AI.*?)</a>', r'href="08-main-landing-page.html"\1</a>'),
    (r'href="#"([^>]*>.*?Log In.*?)</a>', r'href="01-login.html"\1</a>'),
    (r'href="#"([^>]*>.*?Sign In.*?)</a>', r'href="01-login.html"\1</a>'),
    (r'href="#"([^>]*>.*?Establish Identity.*?)</a>', r'href="02-signup.html"\1</a>'),
    (r'href="#"([^>]*>.*?Create Account.*?)</a>', r'href="02-signup.html"\1</a>'),
    (r'href="#"([^>]*>.*?Forgot\?.*?)</a>', r'href="03-forgot-password.html"\1</a>'),
    (r'href="#"([^>]*>.*?Back to Login.*?)</a>', r'href="01-login.html"\1</a>'),
    (r'href="#"([^>]*>.*?Dashboard.*?)</a>', r'href="06-dashboard.html"\1</a>'),
    (r'href="#"([^>]*>.*?Courses.*?)</a>', r'href="05-explore-courses.html"\1</a>'),
    (r'href="#"([^>]*>.*?Academy.*?)</a>', r'href="05-explore-courses.html"\1</a>'),
    (r'href="#"([^>]*>.*?Library.*?)</a>', r'href="09-ebook-library.html"\1</a>'),
    (r'href="#"([^>]*>.*?eBooks.*?)</a>', r'href="09-ebook-library.html"\1</a>'),
    (r'href="#"([^>]*>.*?Workspace.*?)</a>', r'href="12-author-workspace.html"\1</a>'),
    (r'href="#"([^>]*>.*?Profile.*?)</a>', r'href="07-instructor-profile.html"\1</a>'),
]

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original_content = content
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content, flags=re.IGNORECASE | re.DOTALL)
        
    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")

print("Done wiring links!")
