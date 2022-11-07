import "./App.scss";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Header from "./components/Header.jsx";
import LayoutBlog from "./pages/LayoutBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/about-company"
            element={<Navigate to="/about" replace />}
          />
          <Route path="/posts" element={<Blog />} />
          <Route path="/posts/:id" element={<LayoutBlog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
