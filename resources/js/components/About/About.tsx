import React from "react";

import classes from "./About.module.css";

import photo from './images/Rectangle 70.jpg';
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.about}>
                    <h1>О наc</h1>
                    <p>
                        Мы поможем найти популярные достопримечательности всех стран мира и показать каким из них
                        нужна
                        помощь.
                    </p>
                </div>
                <div className={classes.photo}>
                    <img src={photo} alt=""/>
                </div>
                <div className={classes.text}>
                    <p>Здесь вы можете помочь памятникам или городам, которые пострадали от ВАНДАЛИЗМА в их
                        восстанавлении
                    </p>
                    <p>Здесь вы можете помочь памятникам или городам, которые пострадали от ВАНДАЛИЗМА в их
                        восстанавлении
                    </p>
                </div>
                <h1 className={classes.we}>Наши контакты</h1>
                <p className={classes.ohac}>+375000000000</p>
                <p className={classes.ohac}>monument@mail.com</p>
            </div>
        </>
    )
}

export default About;