import './App.css';
import React, {useState, useEffect} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter, Routes
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Item from "./Pages/ItemPage/Item";
import About from "./Pages/About/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Item/:id' element={<Item/>}></Route>
                <Route path='/About' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;