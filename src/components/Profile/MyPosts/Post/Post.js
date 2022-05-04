import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={require("../../../../images/samurai.jpg")}/>
            {props.message}
            <div>like {props.likesCount}</div>
        </div>
    );
}

export default Post;