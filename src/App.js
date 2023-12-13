import { Routes, Route } from "react-router-dom";

import "./assets/css/global.css";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";

function App() {
   return (
      <div>
         <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<ArticleDetailPage />} />
         </Routes>
      </div>
   );
}

export default App;
