import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <img src={require("../images/japan.jpg")} />
            <div>
                avatar + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>);
}

export default Profile;