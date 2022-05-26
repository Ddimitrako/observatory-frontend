import React, {useState, useEffect} from 'react';

import axios from "axios";
import {createRoot} from 'react-dom/client';
import ReactDOMServer from 'react-dom/server'
import ItemsList from "../itemsList";
import {render} from 'react-dom';
import PriorityFilter from "./priorityFilter"
const Filters = () => {

    const [collections, listCollections] = useState([]); //use at check button
    const [checkedState, setCheckedState] = useState();           //use at check button
     var selectedCollections = []
    const [filteredCollectionsData,setFilteredCollectionsData] =useState()

    useEffect(() => {
        getCollections() //call at initialization
    }, []);

    function getCollections() {
        axios.get("http://localhost:8000/get_collections/")
            .then((response) => {
                listCollections(response.data.result);
                setCheckedState(new Array(response.data.result.length).fill(true))
                for (let i in response.data.result)
                    selectedCollections.push(response.data.result[i]["collection_name"])
                getFilteredCollectionsData(selectedCollections) //selectedCollections=["needs","challenges"]
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function getFilteredCollectionsData(data) {
        console.log(data)
        // const container = document.getElementById('itemList');
        // const root = createRoot(container);
        let allCollectionsList = []
        if (data.length == 0) {
            setFilteredCollectionsData(allCollectionsList)
            return
        }
        axios.post("http://localhost:8000/get_data"
            , data)
            .then((response) => {

                for (let position = 0; position < response.data.results.length; position++) {
                    for (let i in response.data.results[position])
                        allCollectionsList.push(response.data.results[position][i])
                setFilteredCollectionsData(allCollectionsList)
                console.log(filteredCollectionsData)
                    // console.log(response.data.results[position])
                }

                // root.render(<ItemList data={allCollectionsList}/>);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const handleOnChange = (row) => {
        const updatedCheckedState = checkedState.map((item, index) => {
                return index === row ? !item : item
            }
        );
        setCheckedState(updatedCheckedState);

        updatedCheckedState.reduce(
            (result, currentState, index) => {

                if (currentState === true) {
                    // selectedCollections=[]
                    // console.log(currentState, index, collections[index]["collection_name"])
                    selectedCollections.push(collections[index]["collection_name"])
                    // console.log(selectedCollections)
                    getFilteredCollectionsData(selectedCollections)
                    return true;
                } else if (currentState === false) {
                    // console.log(currentState, index, collections[index]["collection_name"])
                    selectedCollections.pop(collections[index]["collection_name"])
                    // console.log(selectedCollections)
                    getFilteredCollectionsData(selectedCollections)

                    return true;
                }
                return true;
            },
            []
        );
    };

    return (

        <div className="Filters">
            <section className="section-content padding-y">
                <div className="container">

                    <div className="row">
                        <aside className="col-md-3">
                            <div id= "filters"></div>
                            <div className="card">
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
                                                    <input type="text" className="form-control"
                                                           placeholder="Search Text inside Descriptions"/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-light" type="button"><i
                                                            className="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </article>
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
                                <PriorityFilter visible={false}></PriorityFilter>
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

                            <div id="itemList">
                                <ItemsList filteredData={filteredCollectionsData}></ItemsList>
                            </div>

                            <nav className="mt-4" aria-label="Page navigation sample">
                                <ul className="pagination">
                                    <li className="page-item disabled"><a className="page-link" href="/#">Previous</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">Next</a></li>
                                </ul>
                            </nav>

                        </main>

                    </div>

                </div>
            </section>


        </div>
    );
}
export default Filters;

// const ItemList = ({filteredData}) => {
//     console.log(filteredData)
//     // const [items, setItems] = useState([])
//
//     if (filteredData == null) {
//         return <div>No data available</div>
//     }
//     // {
//     //     filteredData.map((item, index) => {
//     //             console.log(item,index)
//     //
//     //         }
//     //     )
//     // }
//     return (
//         <div>
//             <div className='item-container'>
//             {filteredData.map((item, index) => (
//
//                 <article className="card card-product-list" key={item._id}>
//                     <div className="row no-gutters">
//
//                         <div className="col-md-12">
//
//                             <div className="info-main bg">
//                                 <div className="row">
//
//                                     <div className="col-xs-4 text-left"><a href="/#"
//                                                                            className="h5 title col-xs-4"> {item.name}</a>
//                                     </div>
//                                     <div className="h5 title col-md-2 text-right">
//                                         <div><span className="badge badge-primary">{item.priority}</span></div>
//                                     </div>
//                                 </div>
//                                 <p> {item.description} </p>
//                             </div>
//                         </div>
//
//                     </div>
//                 </article>
//
//
//             ))}
//             </div>
//         </div>
//     );
// };