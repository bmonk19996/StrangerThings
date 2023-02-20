import React from "react";

const SinglePost = (props) => {
    const post = props.post;
    console.log(post, 'from SinglePost');
    // <p></p>
    return(
        <p>{post.title}</p>
    )
}

export default SinglePost;