import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Profile />
    </div >
  );
}

export default App;
