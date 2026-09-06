import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const orgData = {

  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nomad Coffee Roasters",
  "url": "https://nomad-coffee-roaster.vercel.app",
}

export default function App() {
  return (
    <>
      <Navbar />
      <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData)
       }}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/:pillarId" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </>
  );
}
