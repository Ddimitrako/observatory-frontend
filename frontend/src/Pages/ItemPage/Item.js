import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {useLocation} from 'react-router-dom';

const Item = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <div>
            <header className="section-header">
                <div><Navbar/></div>

            </header>

            <div className="container">
                <div className="row">
                    <div className="span5">
                        {/*<img src="img/desktop-large.jpg" className="img-polaroid" alt="imagePreview">*/}
                    </div>
                    <div className="span7">
                        <hr></hr>
                        <div><h2>Title: {data.name}</h2></div>
                        <div><h5>Description: {data.description}</h5></div>
                        {data.solution && <div>Solution: {data.solution}</div>}
                        {data.priority && <div>priority: {data.priority}</div>}
                        {/*<h4 className="muted">Lorem ipsum dolor sit amet consectetur elit...</h4>*/}
                        {/*<p>Lorem ipsum dolor sit amet consectetur elit...</p>*/}
                        <hr></hr>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    );
}
export default Item;