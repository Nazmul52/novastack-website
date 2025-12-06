import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";

// Layout
import Layout from "@components/layout/Layout";
import ScrollToTop from "@components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch all - 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
