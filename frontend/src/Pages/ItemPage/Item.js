import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useLocation } from 'react-router-dom';
const Item = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
            <div>
                <header className="section-header">
                    <div><Navbar/></div>

                </header>
                <div>{data.name}</div>
                <div>{data.description}</div>
                <div>{data.name}</div>
                <div>{data.name}</div>
                <Footer/>
            </div>


    );
}
export default Item;