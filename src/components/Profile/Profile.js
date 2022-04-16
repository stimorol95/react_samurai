import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src={require("../../images/japan.jpg")} />
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>);
}

export default Profile;