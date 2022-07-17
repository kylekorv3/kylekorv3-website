import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NotFound from "./pages/404";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
