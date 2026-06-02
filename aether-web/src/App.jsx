import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Page01Login from './pages/Page01Login';
import Page02Signup from './pages/Page02Signup';
import Page03ForgotPassword from './pages/Page03ForgotPassword';
import Page04LandingPage from './pages/Page04LandingPage';
import Page05ExploreCourses from './pages/Page05ExploreCourses';
import Page06Dashboard from './pages/Page06Dashboard';
import Page07InstructorProfile from './pages/Page07InstructorProfile';
import Page08MainLandingPage from './pages/Page08MainLandingPage';
import Page09EbookLibrary from './pages/Page09EbookLibrary';
import Page10EbookDetail from './pages/Page10EbookDetail';
import Page11SmartReader from './pages/Page11SmartReader';
import Page12AuthorWorkspace from './pages/Page12AuthorWorkspace';
import Page13GlobalCheckout from './pages/Page13GlobalCheckout';

function App() {
  return (
    <Router>
      <div className="dark antialiased min-h-screen flex flex-col font-body-md text-body-md overflow-x-hidden selection:bg-tertiary selection:text-on-tertiary text-on-background">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/08-main-landing-page.html" />} />
          <Route path="/01-login.html" element={<Page01Login />} />
          <Route path="/02-signup.html" element={<Page02Signup />} />
          <Route path="/03-forgot-password.html" element={<Page03ForgotPassword />} />
          <Route path="/04-landing-page.html" element={<Page04LandingPage />} />
          <Route path="/05-explore-courses.html" element={<Page05ExploreCourses />} />
          <Route path="/06-dashboard.html" element={<Page06Dashboard />} />
          <Route path="/07-instructor-profile.html" element={<Page07InstructorProfile />} />
          <Route path="/08-main-landing-page.html" element={<Page08MainLandingPage />} />
          <Route path="/09-ebook-library.html" element={<Page09EbookLibrary />} />
          <Route path="/10-ebook-detail.html" element={<Page10EbookDetail />} />
          <Route path="/11-smart-reader.html" element={<Page11SmartReader />} />
          <Route path="/12-author-workspace.html" element={<Page12AuthorWorkspace />} />
          <Route path="/13-global-checkout.html" element={<Page13GlobalCheckout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
