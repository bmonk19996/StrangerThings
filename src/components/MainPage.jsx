import React, { useState, useEffect } from "react";
import { NewPost, PostList } from "./";
import { useOutletContext } from "react-router-dom";
import { getPosts } from "../API-Adapt";
export default function MainPage() {
  const [token, , showNew, setShowNew] = useOutletContext();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const temporary = posts.filter((post) => ((post.title).toLowerCase()).includes(searchTerm.toLowerCase()));

    setFilteredPosts(temporary);
  }, [searchTerm]);
  async function retrievePosts() {
    const myPosts = await getPosts(token);
    setPosts(myPosts.data.posts);
  }
  useEffect(() => {
    retrievePosts(token);
  }, [token]);

  function clearSearch() {
    setSearchTerm("");
  }

  return (
    <div className="mainPage">
      <div id="searchBar">
        <form>
          <label>Search for Posts:</label>
          <input
            type="text"
            value={searchTerm}
            onInput={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
          <button className='pageButtons'onClick={() => clearSearch()}>clear</button>
        </form>
      </div>
      {searchTerm.length ? (
        <PostList posts={filteredPosts} setPosts={setPosts} token={token} />
      ) : (
        <PostList posts={posts} setPosts={setPosts} token={token} />
      )}

      {token && showNew ? (
        <NewPost
          token={token}
          setPosts={setPosts}
          posts={posts}
          setShowNew={setShowNew}
        />
      ) : null}
    </div>
  );
}
