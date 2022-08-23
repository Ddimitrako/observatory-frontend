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
                <Route path='/observatory/' element={<Home/>}></Route>
                <Route path='/observatory/Item/:id' element={<Item/>}></Route>
                <Route path='/observatory/About' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;