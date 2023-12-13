import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./components.css";
const MainLayout = ({ children }) => {
   return (
      <div className="mainLayout">
         <Header />
         {children}
         <Footer />
      </div>
   );
};

export default MainLayout;
