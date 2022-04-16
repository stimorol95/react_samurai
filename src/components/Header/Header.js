import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src={require("../../images/samurai.jpg")} />
        </header>);
}

export default Header;