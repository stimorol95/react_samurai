import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src={require("../../../../images/samurai.jpg")}/>
            post 1
        </div>
    );
}

export default Post;