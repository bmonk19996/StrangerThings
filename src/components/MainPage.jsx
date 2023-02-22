import React, { useState, useEffect } from "react";
import { NewPost, PostList } from "./";
import { useOutletContext } from "react-router-dom";
import { getPosts } from "../API-Adapt";
export default function MainPage() {
  const [token,, showNew,] = useOutletContext();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

useEffect(() => {

  const temporary = posts.filter(post => 
    (post.title).includes(searchTerm)
  );

  setFilteredPosts(temporary);

}, [searchTerm])

function filterPosts(post){
  if((post.title).includes(searchTerm)){
    // console.log(post);
    return post;
  }
}

console.log(filteredPosts);

  async function retrievePosts() {
    const myPosts = await getPosts(token);
    setPosts(myPosts.data.posts);
  }
  useEffect(() => {
    retrievePosts(token);
  }, [token]);
  return (
    <div className="mainPage">
      <div id="searchBar">
        <form>
          <label>Search for Posts:</label>
          <input type='text' onInput={(event) => {setSearchTerm(event.target.value)}}></input>
        </form>
      </div>
      <PostList posts={posts} setPosts={setPosts} token={token} />
      {token && showNew ? (
        <NewPost token={token} setPosts={setPosts} posts={posts} />
      ) : null}
    </div>
  );
}

