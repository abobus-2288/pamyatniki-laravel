import React from "react";

import {Routes, Route} from 'react-router-dom';

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </main>

            <Footer/>
        </>
    );
}

export default App;
