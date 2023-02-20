import React from 'react';
import {SinglePost} from './';

const PostList = (props) => {
const posts = props.posts;
return(
    <div>
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