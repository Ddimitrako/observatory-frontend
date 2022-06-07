import React, {useState, useEffect} from 'react';
import axios from "axios";

const PriorityFilter = ({searchBarText,priority, setPriority,setFilteredCollectionsData,selectedCollList}) => {

    const handleChange = (event) => {
        // console.log(event.target.value)
        setPriority(event.target.value)
    }
    const resetRadioState = () => {
        setPriority('any');
    }
    useEffect(() => {
            // console.log(priority)
            getItemsByPriority(priority,searchBarText)
        // } //call at initialization

    }, [priority,searchBarText]);

    function getItemsByPriority(priority,searchBarText) {
        // console.log(selectedCollList)
        let allCollectionsList = []

        if(searchBarText===""){
            if (priority === 'any') {
                axios.post("http://localhost:8000/get_data/", selectedCollList)
                    .then((response) => {

                        for (let position = 0; position < response.data.results.length; position++) {
                            for (let i in response.data.results[position])
                                allCollectionsList.push(response.data.results[position][i])
                            // console.log(allCollectionsList)
                        }
                        setFilteredCollectionsData(allCollectionsList)
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                axios.post("http://localhost:8000/filter_data/needs", {"priority": priority})
                    .then((response) => {
                        setFilteredCollectionsData(response.data.needs)
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        } else {
            let items = []
            // console.log(priority,selectedCollList,searchBarText)
            axios.post("http://localhost:8000/filter_data_by_advanced_search"
                , {
                    "collections": selectedCollList,
                    "filters": {"priority": priority}
                }, {
                    params: {
                        text: searchBarText
                    }
                })
                .then((response) => {
                    // console.log(response.data.result)
                    for (let position = 0; position < response.data.result.length; position++) {
                        for (var value in response.data.result[position]) {
                            items.push(response.data.result[position][value])
                        }
                        setFilteredCollectionsData(items)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
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
                           className="custom-control-input" value={"any"} checked={priority === 'any'}
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