import { Routes, Route } from "react-router-dom";
import "./assets/css/global.css";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import { Toaster } from "react-hot-toast";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";

function App() {
   return (
      <div>
         <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<ArticleDetailPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
         </Routes>
         <Toaster />
      </div>
   );
}

export default App;
