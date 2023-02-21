import React, {useState, useEffect} from "react";
import {NewPost, PostList} from "./";
import { useOutletContext } from "react-router-dom";
import { getPosts } from "../API-Adapt";
export default function MainPage() {
    const [token, setToken] = useOutletContext()
    const [posts, setPosts] = useState([]);
    async function retrievePosts() {
  
        const myPosts = await getPosts();
        setPosts(myPosts.data.posts);
      }
    
      useEffect(() => {
        retrievePosts();
      }, []);

  return (
    <div className="mainPage">
      <PostList posts={posts}/>
      <NewPost token={token} setPosts={setPosts} posts={posts}/>
    </div>
  );
}
