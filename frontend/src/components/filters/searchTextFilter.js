import PriorityFilter from "./priorityFilter";
import React, {useEffect, useState} from "react";
import axios from "axios";


const SearchTextFilter = ({priority, selectedCollList, setFilteredCollectionsData}) => {


    const [searchBarText, setSearchBarText] = useState("")

    useEffect(() => {
        // console.log(priority)
        // if (priority === 'any' && 'needs' in selectedCollList) {
        //
        // } else {
        //    // filterTextAdvanced()
        // }
    }, [searchBarText])

    function handleChange(e) {
        console.log(e.target.value); // your search bar text
        setSearchBarText(e.target.value)
    }

    function searchText() {         // your search bar text
        filterTextAdvanced(searchBarText, selectedCollList, priority)
    }


    function filterTextAdvanced(text, collection, priority) {
        console.log(text, collection, priority)

        let items = []
        // if (text.length == 0) {
        //     setFilteredCollectionsData([])
        //     return
        // }
        axios.post("http://localhost:8000/filter_data_by_advanced_search"
            , {"collections": "need", "text": text, "filters": {"priority": priority}})
            .then((response) => {
                console.log(text, collection)
                for (let position = 0; position < response.data.results.length; position++) {
                    for (let i in response.data.results[position])
                        items.push(response.data.results[position][i])
                    setFilteredCollectionsData(items)
                }
            })
            .catch((err) => {
                console.log(err);
            });
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
                                   placeholder="Search Description Text"/>
                            <div className="input-group-append">
                                <button className="btn btn-light" type="button" onClick={searchText}><i
                                    className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    )
}
export default SearchTextFilter;