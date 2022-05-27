import React, {useState, useEffect} from 'react';
// import ItemList from "../ItemsListView";
import axios from "axios";
import {createRoot} from 'react-dom/client';
import ReactDOMServer from 'react-dom/server'
import ItemsListView from "../itemsList";
import {render} from 'react-dom';

const PriorityFilter = () => {

    const [priority, setPriority] = React.useState('none');

    const handleChange = (event) => {
        console.log(event.target.value)
        setPriority(event.target.value)
    }
    const resetRadioState = () => {
        setPriority('none');
    }

    return (<article className="filter-group">
        <header className="card-header">
            <a href="/#" data-toggle="collapse" data-target="#collapse_5"
               aria-expanded="true" className="">
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">PRIORITY </h6>
            </a>
        </header>
        <div className="filter-content collapse in" id="collapse_5">
            <div className="card-body">
                <label className="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio"
                           className="custom-control-input" value={"none"} checked={priority === 'none'}
                           onChange={handleChange} onClick={resetRadioState}/>
                    <div className="custom-control-label">Any Priority</div>
                </label>

                <label className="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio"
                           className="custom-control-input" value={"high"} checked={priority === 'high'}
                           onChange={handleChange}/>
                    <div className="custom-control-label">High</div>
                </label>

                <label className="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio"
                           className="custom-control-input" value={"medium"} checked={priority === 'medium'}
                           onChange={handleChange}/>
                    <div className="custom-control-label">Medium</div>
                </label>

                <label className="custom-control custom-radio">
                    <input type="radio" name="myfilter_radio"
                           className="custom-control-input" value={"low"} checked={priority === 'low'}
                           onChange={handleChange}/>
                    <div className="custom-control-label">Low</div>
                </label>
            </div>
        </div>
    </article>);
}

export default PriorityFilter;