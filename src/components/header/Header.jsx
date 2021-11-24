import React from 'react';
import style from './header.module.scss'

const Header = () => {
    return (
        <header className={style.wrapper}>
            <h2>Select timezone...</h2>
        </header>
    );
};

export default Header;