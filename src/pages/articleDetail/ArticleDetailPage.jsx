import React from 'react';
import MainLayout from '../../components/MainLayout';
import BreadCrumbs from '../../components/BreadCrumbs';
import SuggestedPost from './container/SuggestedPost';
import SidebarLeft from '../../components/SidebarLeft';
import SidebarRight from '../../components/SidebarRight';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

import './articledetail.css';
import CommentsContainer from '../../components/comments/CommentsContainer';

const breadCrumbsData = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Article',
    link: '/',
  },
  {
    name: 'Article Detail',
    link: '/blog/i',
  },
];

const postData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: '2022-01-01',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: '2022-01-01',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: '2022-01-01',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: '2022-01-01',
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: '2022-01-01',
  },
];

const tagsData = ['Programming', 'Development', 'Testing'];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <div className="article">
        <div className="article-sidebar-left">
          <SidebarLeft />
        </div>
        <section className="article-detail-page">
          <article className="article-detail">
            <BreadCrumbs data={breadCrumbsData} />
            {/* Generating the BreadCrumbs from the data */}
            <div className="article-img-box">
              <img
                src={images.latestPost}
                alt="Latest Post"
                className="article-img"
              />
            </div>

            <Link
              to="/blog?category=SelectedCategory"
              className="article-category">
              Category
            </Link>
            <h1 className="article-title">Lorem ipsum dolor sit amet</h1>
            <p className="article-post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              fuga voluptatum corporis nostrum molestias aspernatur! Ad quia
              totam reprehenderit accusantium. Deserunt cumque voluptates alias,
              commodi voluptatibus nam consequatur animi facilis. Optio officiis
              omnis magnam, eius temporibus laborum numquam repudiandae eveniet
              reiciendis! Quos cupiditate molestiae facere doloremque eius! Ad
              necessitatibus iure, aliquid, sit recusandae voluptas quis est
              doloribus ducimus consequatur modi. Aperiam corrupti saepe eum!
              Blanditiis neque at quo illum error quos doloremque quia mollitia?
              Ut rem dolores voluptatum eius voluptatibus veniam, temporibus sit
              maxime eveniet, officiis doloremque assumenda. Cupiditate,
              commodi? Corporis eaque enim impedit quis necessitatibus. Quam
              architecto amet fugit cumque unde sapiente, officia quos officiis
              ipsam nisi sunt deserunt est fuga quidem veniam corrupti rerum
              quasi numquam porro culpa? Possimus dolore cum mollitia omnis,
              inventore error perferendis eveniet quidem nesciunt odio aliquid
              architecto nobis ratione minima ut quis eligendi fugiat voluptate
              corporis soluta. Magnam eligendi mollitia dolorem asperiores
              repudiandae. Recusandae blanditiis quam accusamus alias quo, fuga,
              sunt unde ullam magnam dolores labore non debitis beatae
              voluptatem corporis cumque, provident iste consectetur tempore
              aliquid. Autem totam quam neque ipsum id? Nam alias eligendi
              tempora optio labore praesentium facere facilis impedit
              exercitationem consequuntur quidem laudantium aut repellat
              reiciendis voluptate cumque, quam odit similique. Vero quisquam,
              nostrum qui quod mollitia similique pariatur. Voluptatum, magnam
              rem vero ipsam temporibus qui est repudiandae cumque architecto!
              Eveniet perferendis rem iure, illum ad atque voluptas molestias
              cupiditate excepturi unde repudiandae fuga vero tempore molestiae
              aliquid dolore? Ab cum reprehenderit dicta odio veniam animi
              consectetur quos illum facere ex, blanditiis temporibus excepturi,
              eos laudantium maiores expedita. Quaerat quae vero perspiciatis,
              expedita sed illum asperiores ad praesentium suscipit! Aut
              consequatur molestias, eveniet error quam enim laboriosam saepe
              odit nostrum exercitationem tenetur modi, voluptatum, eum numquam
              ratione architecto ea? Iste similique fugiat tenetur impedit alias
              provident odio tempora debitis? Amet, rem odio ab fugiat nobis
              blanditiis. Tempora sequi laborum maxime ipsum tenetur sed nulla
              suscipit debitis quasi dolor? Similique vitae optio sunt tempore
              at nobis exercitationem molestiae? Quos, assumenda? In voluptate
              voluptates tenetur, architecto nulla dolorum voluptas sed fugiat,
              ut quae aliquam hic velit inventore numquam natus dolorem cum
              excepturi? Nemo assumenda obcaecati accusamus quaerat aliquid iure
              at fugiat?
            </p>
            <CommentsContainer
              className="comments-container"
              logginedUserId="a"
            />
          </article>
          <SuggestedPost
            header="Latest Article"
            post={postData}
            tags={tagsData}
          />
        </section>
        <div className="article-sidebar-right sticky">
          <SidebarRight />
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticleDetailPage;
