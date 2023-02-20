import React, {useState, useEffect} from "react";
import { getPosts } from "../API-Adapt";
import Navbar from "./Navbar";
import PostList from "./PostList";

const Main = () => {

   const [posts, setPosts] = useState([])

    async function retrievePosts () {
        const myPosts = await getPosts()
        // console.log(myPosts.data)
        setPosts(myPosts.data.posts);
    }
    useEffect(() => {
        retrievePosts()  
    },[])

    return(
        <div id="main">
            <Navbar/>
          <PostList posts={posts} />

        </div>
    )
}

export default Main