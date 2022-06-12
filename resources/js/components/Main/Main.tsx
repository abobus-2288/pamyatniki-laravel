import React from "react";

import classes from "./Main.module.css";

const Main = () => {
    return (
        <>
            <div className={classes.background}>
                <div>
                    <input type="" placeholder="Поиск памятников и мемориала мира"/>
                </div>
            </div>
            <div className={classes.menu + ' ' + classes.container}>
                <div className={`${classes.kostel} ${classes.monument}`}>
                    <div className={classes.country}>Беларусь</div>
                    <div className={classes.title}>
                        <p className={classes.name}>Костел Вознесения Девы Марии</p>
                        <p className={classes.city}>г. Миоры | 115 лет</p>
                    </div>
                </div>
                <div className={`${classes.hram} ${classes.monument}`}>
                    <div className={classes.country}>Россия</div>
                    <div className={classes.title}>
                        <p className={classes.name}>Храм Василия Блаженного</p>
                        <p className={classes.city}>г. Москва | 446 лет</p>
                    </div>
                </div>
                <div className={`${classes.bashna} ${classes.monument}`}>
                    <div className={classes.country}>Франция</div>
                    <div className={classes.title}>
                        <p className={classes.name}>Эйфелева башня</p>
                        <p className={classes.city}>г.Париж | 135 лет</p>
                    </div>
                </div>
                <div className={`${classes.bigBan} ${classes.monument}`}>
                    <div className={classes.country}>Англия</div>
                    <div className={classes.title}>
                        <p className={classes.name}>Биг-Бен</p>
                        <p className={classes.city}>г.Лондон | 179 лет</p>
                    </div>
                </div>
                <div className={`${classes.bashna} ${classes.monument}`}>
                    <div className={classes.country}>Франция</div>
                    <div className={classes.title}>
                        <p className={classes.name}>Эйфелева башня</p>
                        <p className={classes.city}>г.Париж | 135 лет</p>
                    </div>
                </div>
                <div className={`${classes.kostel} ${classes.monument}`}>
                    <div className={classes.country}>Беларусь</div>
                    <div className={classes.title}>
                        <p className={classes.name}>Костел Вознесения Девы Марии</p>
                        <p className={classes.city}>г. Миоры | 115 лет</p>
                    </div>
                </div>
                <div className={`${classes.bigBan} ${classes.monument}`}>
                    <div className={classes.country}>Англия</div>
                    <div className={classes.title}>
                        <p className={classes.name}>Биг-Бен</p>
                        <p className={classes.city}>г.Лондон | 179 лет</p>
                    </div>
                </div>
                <div className={`${classes.hram} ${classes.monument}`}>
                    <div className={classes.country}>Россия</div>
                    <div className={classes.title}>
                        <p className={classes.name}>Храм Василия Блаженного</p>
                        <p className={classes.city}>г. Москва | 446 лет</p>
                    </div>
                </div>
            </div>
            <h1 className={classes.title3}>Достопримечательности<br/>
                которые находятся в опасности</h1>
            <div className={classes.menu2 + ' ' + classes.container}>
                <div className={`${classes.park} ${classes.dangerMonument}`}>
                    <div className={classes.title2}>
                        <p className={classes.name2}>Национальный парк Рапа-Нуи</p>
                        <p className={classes.reason}>Не ухаживают и разрушают камни.</p>
                    </div>
                    <a className={classes.tablet}>Пожертвовать</a>
                </div>
                <div className={`${classes.kutammaku} ${classes.dangerMonument}`}>
                    <div className={classes.title2}>
                        <p className={classes.name2}>Кутаммаку</p>
                        <p className={classes.reason}>Разрушается, нет денег на постройку.</p>
                    </div>
                    <a className={classes.tablet}>Пожертвовать</a>
                </div>
                <div className={`${classes.sobor} ${classes.dangerMonument}`}>
                    <div className={classes.title2}>
                        <p className={classes.name2}>Собор Парижской Богоматери</p>
                        <p className={classes.reason}>Крупный пожар</p>
                    </div>
                    <a className={classes.tablet}>Пожертвовать</a>
                </div>
                <div className={`${classes.cake} ${classes.dangerMonument}`}>
                    <div className={classes.title2}>
                        <p className={classes.name2}>Пряничные домики Порт-о-Пренса</p>
                        <p className={classes.reason}>Ломают и портят здания.</p>
                    </div>
                    <a className={classes.tablet}>Пожертвовать</a>
                </div>
            </div>
            <p className={classes.vandals}>Многие памятники подверглись *<span>вандализму</span>.<br/>
                Вандализм не является бессмысленным, однородным действием, а является<br/>
                выражением протеста и исходит из
                определённых мотивов и намерений.</p>
            <p className={classes.solving}>У нас есть несколько идей борьбы с ним </p>
            <h1 className={classes.secondary1}>Установка видеонаблюдения</h1>
            <div className={classes.menu3 + ' ' + classes.container}>
                <div className={classes.tablet2}>
                </div>
                <div className={classes.cameras}>
                </div>
                <p className={classes.text}>
                    Kaмepы нe дoлжны быть cкpытыми, в идeaлe дoлжны виceть кpyпныe пpeдyпpeждeния o видeoнaблюдeнии.
                </p>
                <p className={classes.text2}>
                    Cтaндapтный нaбop включaeт в ceбя двe-тpи кaмepы, лyчшe бpaть aнтивaндaльныe: рядом с памятником, и
                    oднa-двe вокруг него
                </p>
            </div>
            <h1 className={classes.secondary2}>Закрытие территории</h1>
            <div className={classes.menu4 + ' ' + classes.container}>
                <div className={classes.barrier}>
                </div>
                <div className={classes.zabor}>
                </div>
                <p className={classes.secondary4}>Можно поставить заборы, шлагбаумы и сделать вход платным на
                    саму<br/> территорию
                </p>
            </div>
            <h1 className={classes.secondary3}>Охрана</h1>
            <div className={classes.menu5 + ' ' + classes.container}>
                <div className={classes.security}>
                </div>
                <div className={classes.watchman}>
                </div>
                <p className={classes.secondary5}>Нанять охрану и сторожа</p>
            </div>
        </>
    );
}
export default Main