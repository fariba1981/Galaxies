import React, { useEffect, useState } from "react";
import "./Blog.css";
import Button from '../../components/Button'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const loadPosts = async () => {
    setLoading(true);
    const postsResponse = await fetch(
      "http://www.mocky.io/v2/5e9278be3100005b00462cbd"
    );
    const posts = await postsResponse.json();
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    setPageCount(calculatePageCount());
  }, [posts]);

  const calculatePageCount = () => {
    if (posts.length % 3 == 0) {
      return parseInt(posts.length / 3);
    } else if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
  };

  const activePageHandler = (pageNumber) =>{
    setActivePage(pageNumber);
  }

  console.log(activePage)

  return (
    <div className="posts">
      {loading && <div>Loading ...</div>}
      {posts.length == 0 && <div>There is no post here</div>}
      {posts.length > 0 && (
        <>
          <ul>
            {posts.slice(3*activePage, 3*(activePage+1)).map((post) => (
              <li>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      
      <div>
        <ul className="paging">
          {new Array(pageCount).fill(0).map((item, index) =>(
            <li className={activePage === index+1 ? "active" : ""}>
              <Button onclickHandler={()=>activePageHandler(index+1)}>{index+1}</Button>
            </li>
          ))}
        </ul>
      </div>
      <br/>
    </div>
    
  );
};
export default Blog;
