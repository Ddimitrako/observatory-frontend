import React from "react";
import NavigationBar from "../../components/navbar";
import Footer from "../../components/footer";
import {useLocation} from 'react-router-dom';

const Item = () => {
    const location = useLocation();
    const data = location.state;
    return (
        <div>
            <header className="section-header">
                {/*<div><NavigationBar/></div>*/}

            </header>

            <div className="container">
                <div className="row">
                    <div className="span5">
                        {/*<img src="img/desktop-large.jpg" className="img-polaroid" alt="imagePreview">*/}
                    </div>
                    <div className="span7">
                        <hr></hr>
                        <div><h2>{data.name}</h2></div>
                        <hr></hr>
                        {/*<div><h5>Description:</h5></div>*/}
                        <div>{data.description}</div>
                        {data.solution && <div id={"solution_id"}>
                            <h6>Solution:
                                <div>{data.solution}</div>
                            </h6>
                        </div>}
                        <br/>
                        {data.priority && <div>
                            <h6>Priority:</h6>
                            <div><span className="span badge-info rounded-sm">{data.priority}</span></div>
                        </div>}
                        <br/>
                        {data.source && <div><h6>Source:</h6>
                            <div><a href={data.source}>{data.source}</a></div>
                        </div>}
                        <hr></hr>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    );
}
export default Item;