import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div>
                my posts
                <div>
                    new post
                </div>
            </div>
            <div className={s.posts}>
               <Post message="Hi" likesCount="2"/>
               <Post message="Hello" likesCount="23"/>
            </div>
        </div>
    );
}

export default MyPosts;