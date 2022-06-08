
import React, {useState, useEffect} from "react";
// import ItemList from "../../components/ItemsListView";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "../../components/navbar";
import Footer from "../../components/footer";
import ItemType from "../../components/filters/filters";
import Filters from "../../components/filters/filters";

const Home=()=>{
    return  (
        <div className="Home">
            <header className="section-header">
                <div><NavigationBar/></div>
            </header>
            <div id="Filters"><Filters/></div>
            <Footer/>



        </div>
    )
}

export default Home;