import React from 'react';
import './Article.css';
const Article = ({imgUrl,date,title}) => {
  return (
    <div className="jarvis__blog-container_article">
       <div className="jarvis__blog-container_article-image">
           <img src={imgUrl} />
        </div>
        <div className="jarvis__blog-container_article-content">
           <div>
            <p>{date}</p>
            <h3>{title}</h3>
           </div>
           <p>Read Full article</p>
          </div>      
    </div>
  )
}

export default Article
