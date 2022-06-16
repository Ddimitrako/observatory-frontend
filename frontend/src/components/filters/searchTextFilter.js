import PriorityFilter from "./priorityFilter";
import React, {useEffect, useState} from "react";
import axios from "axios";

var hostName = process.env.REACT_APP_HOSTNAME.toString()

const SearchTextFilter = ({searchBarText, setSearchBarText,priority, selectedCollList, setFilteredCollectionsData}) => {


    useEffect(() => {
        searchText()
    }, [searchBarText,selectedCollList])

    function handleChange(e) {
        // console.log(e.target.value); // your search bar text
        //e.preventDefault()
        setSearchBarText(e.target.value)
    }

    function searchText() {         // your search bar text
        filterTextAdvanced(searchBarText, selectedCollList, priority)
    }


    function filterTextAdvanced(text, collection, priority) {
        let items = []
        if (text !== "") {
            axios.post(hostName + '/filter_data_by_advanced_search'
                , {
                    "collections": collection,
                    "filters": {"priority": priority}
                }, {
                    params: {
                        text
                    }
                })
                .then((response) => {
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


    return (
        <article className="filter-group">
            <header className="card-header">
                <a href="/#" data-toggle="collapse" data-target="#collapse_1"
                   aria-expanded="true" className="">
                    <i className="icon-control fa fa-chevron-down"></i>
                    <h6 className="title">TEXT</h6>
                </a>
            </header>
            <div className="filter-content collapse show" id="collapse_1">
                <div className="card-body">
                    <form className="pb-3">
                        <div className="input-group">
                            <input type="text" className="form-control" onChange={handleChange}
                                   onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                   placeholder="Search Description Text"/>
                            {/*<div className="input-group-append">*/}
                            {/*    <button className="btn btn-light" type="button" onClick={searchText}><i*/}
                            {/*        className="fa fa-search"></i></button>*/}
                            {/*</div>*/}
                        </div>
                    </form>
                </div>
            </div>
        </article>
    )
}
export default SearchTextFilter;