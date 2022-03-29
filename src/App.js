import './App.css';
import React from "react";

const App = () => {

  return (
    <div className="app">
      <header className="header">
        <img src={require("./images/samurai.jpg")} />
      </header>
      <nav className="nav">
        <div><a>Profile</a> </div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav >
      <div className="content">
        <img src={require("./images/japan.jpg")} />
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
      </div>
    </div >
  );
}

export default App;
