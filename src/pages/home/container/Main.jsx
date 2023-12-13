import React from 'react';
import ArticleCard from '../../../components/ArticleCard';
import SidebarLeft from '../../../components/SidebarLeft';
import SidebarRight from '../../../components/SidebarRight';
import './container.css';

const Main = () => {
  return (
    <section className="container">
      <div className="sidebar-left sticky">
        <SidebarLeft />
      </div>

      <div className="article-card">
        <ArticleCard />
      </div>

      <div className="sidebar-right sticky">
        <SidebarRight />
      </div>
    </section>
  );
};

export default Main;
