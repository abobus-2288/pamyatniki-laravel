import React from "react";

import classes from './Footer.module.css';

import logo from './images/logo222.png';

const Footer = () => {
    return (
        <footer>
            <div className={classes.container}>
                <p>+37500000000</p>
                <img src={logo} alt="logo"/>
                <p>monument@mail.com</p>
            </div>
        </footer>
    )
}

export default Footer;