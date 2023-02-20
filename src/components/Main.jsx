import React, {useState, useEffect} from "react";
import { getPosts } from "../API-Adapt";
import Navbar from "./Navbar";

const Main = () => {

   const [posts, setPosts] = useState([])

    async function retrievePosts () {
        const myPosts = await getPosts()
        console.log(myPosts.data)
        setPosts(myPosts.data);
    }
    useEffect(() => {
        retrievePosts()  
    },[])

    return(
        <div id="main">
            <Navbar/>
          <h1>hello</h1>
        </div>
    )
}

export default Main