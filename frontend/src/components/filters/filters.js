import React, {useState, useEffect} from 'react';

import axios from "axios";
import {SpinnerCircularSplit} from 'spinners-react';
import SearchTextFilter from "./searchTextFilter";
import PriorityFilter from "./priorityFilter"
import PaginatedItems from "../itemsList";

const Filters = () => {
    const [collections, listCollections] = useState([]); //use at check button
    const [checkedState, setCheckedState] = useState();           //use at check button
    var selectedCollectionsList = []
    const [selectedCollList, setSelectedCollList] = useState([]);
    const [showPriorityFilter, setShowPriorityFilter] = useState(true)
    const [filteredCollectionsData, setFilteredCollectionsData] = useState()
    const [priority, setPriority] = useState('any')

    useEffect(() => {
        getCollections() //call at initialization
    }, []);


    function getCollections() {
        axios.get("http://localhost:8000/get_collections/")
            .then((response) => {
                listCollections(response.data.result);
                setCheckedState(new Array(response.data.result.length).fill(true))
                for (let i in response.data.result)
                    selectedCollectionsList.push(response.data.result[i]["collection_name"])
                getFilteredCollectionsData(selectedCollectionsList) //selectedCollections=["needs","challenges"]
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function getFilteredCollectionsData(data) {
        let allCollectionsList = []
        if (data.length == 0) {
            setFilteredCollectionsData(allCollectionsList)
            return
        }
        axios.post("http://localhost:8000/get_data"
            , data)
            .then((response) => {
                console.log(data)
                for (let position = 0; position < response.data.results.length; position++) {
                    for (let i in response.data.results[position])
                        allCollectionsList.push(response.data.results[position][i])
                    setFilteredCollectionsData(allCollectionsList)
                    setSelectedCollList(data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const handleOnChange = (row) => {
        let collectionsList = []
        collections.map((index) => {
            let collection = {[index.collection_name.toString()]: true}
            collectionsList.push(collection)
        })
        const updatedCheckedState = checkedState.map((item, index) => {
                if (index === row) {
                    collectionsList[index] = {[collections[index].collection_name]: !item}

                } else {
                    collectionsList[index] = {[collections[index].collection_name]: item}
                }

                return index === row ? !item : item
            }
        );
        setCheckedState(updatedCheckedState);

        let filteredColList = []
        collectionsList.map((item) => {
            if (Object.values(item)[0] === true) {
                filteredColList.push(Object.keys(item)[0])
            }
        })
        setSelectedCollList(filteredColList)
        console.log(filteredColList)
        getFilteredCollectionsData(filteredColList)
        SetFiltersVisibility(filteredColList)

    };

    function SetFiltersVisibility(list) { //Hide or show TEXT and PRIORITY filters
        for (let obj in list) {
            if (list[obj] == 'needs') {
                setShowPriorityFilter(true)
                setPriority("any")
            } else {
                setShowPriorityFilter(false)
                setPriority("any")
            }
        }
    }

    return (

        <div className="Filters">
            <section className="section-content padding-y">
                <div className="container">

                    <div className="row">
                        <aside className="col-md-3">
                            <div id="filters"></div>
                            <div className="card">
                                <SearchTextFilter priority={priority} selectedCollList={selectedCollList}
                                                  setFilteredCollectionsData={setFilteredCollectionsData}></SearchTextFilter>
                                <article className="filter-group">
                                    <header className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse_2"
                                           aria-expanded="true" className="">
                                            <i className="icon-control fa fa-chevron-down"></i>
                                            <h6 className="title">COLLECTION </h6>
                                        </a>
                                    </header>
                                    <div className="filter-content collapse show" id="collapse_2">
                                        <div className="card-body">
                                            {collections.map((index, row) => {
                                                // console.log(checkedState[row],row,index)
                                                return (
                                                    <li key={index["collection_name"]} style={{listStyleType: 'none'}}>
                                                        <div className="listCollections-list-item ">

                                                            <input style={{"height": '1.2em', "width": "1.2em"}}
                                                                   type="checkbox"
                                                                   id={`custom-checkbox-${index["collection_name"]}`}
                                                                   name={index["collection_name"]}
                                                                   value={index["collection_name"]}
                                                                   checked={checkedState[row]}
                                                                   onChange={() => handleOnChange(row)}
                                                            />
                                                            <label htmlFor={`custom-checkbox-${index}`}
                                                                   style={{marginLeft: '.5rem'}}>{index["collection_name"]}</label>
                                                            <b className="badge badge-pill badge-light float-right">{index["count"]}</b>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </article>
                                {showPriorityFilter && <PriorityFilter priority={priority} setPriority={setPriority}
                                                                       setFilteredCollectionsData={setFilteredCollectionsData}
                                                                       selectedCollList={selectedCollList}></PriorityFilter>}
                            </div>

                        </aside>
                        <main className="col-md-9">

                            {/*<header className="border-bottom mb-4 pb-3">*/}
                            {/*    <div className="form-inline">*/}
                            {/*        <span className="mr-md-auto">32 Items found </span>*/}
                            {/*        <select className="mr-2 form-control">*/}
                            {/*            <option>Latest items</option>*/}
                            {/*            <option>Oldest items</option>*/}
                            {/*        </select>*/}
                            {/*    </div>*/}
                            {/*</header>*/}

                            <div id="itemList" >
                                <div style={{position:"absolute",top:"25%",left: "25%"}}>
                                    {!filteredCollectionsData && <SpinnerCircularSplit size={150} thickness={60}
                                                                                   secondaryColor={'rgba(215,197,197,0.78)'}
                                                                                   enabled={true}/>}
                                </div>

                                {filteredCollectionsData &&
                                <PaginatedItems itemsData={filteredCollectionsData}></PaginatedItems>}
                            </div>

                        </main>

                    </div>

                </div>
            </section>


        </div>
    );
}
export default Filters;

