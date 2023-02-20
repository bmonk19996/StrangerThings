import React from 'react';
import SinglePost from './SinglePost';

const PostList = (props) => {
const posts = props.posts;
console.log(typeof posts, 'from outside map in Post List');

return(
    <div>
        <div>hello</div>
        {
            posts.length ? posts.map((post, idx) => {
                return(
                    <SinglePost post={post} key={`the post is at the idex of ${idx}`}/>
                )
            }) : <div>test</div>
        }
    </div>
)

}

export default PostList;