import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsFeed.css"; 

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "Your key";
  const URL = `Your link`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(URL);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-title">Live News Feed</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
              />
            )}
            <div className="news-content">
              <h3 className="news-heading">{article.title}</h3>
              <p className="news-description">
                {article.description
                  ? article.description
                  : "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
