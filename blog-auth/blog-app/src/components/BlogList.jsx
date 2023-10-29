import React from "react";
import Header from "./Header";
import BlogDetail from "./BlogDetail";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";

function BlogList() {
  const { jsonData } = useAuth();

  return (
    <>
      <Header />
      <div className="blog-container">
        <div className="blog-list" id="blog-list">
          {jsonData.map((item) => (
            <article className="blog-card">
              <h2>{item.title.substring(0, 10)}</h2>
              <p>{item.description.substring(0, 20)}....</p>
              <Link to={`/BlogDetail/${item.id}`}>
                <button>Read More</button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
export default BlogList;
