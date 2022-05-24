import React, {useState, useEffect} from 'react';
import ItemList from "../ItemsListView";
import axios from "axios";
import { createRoot } from 'react-dom/client';
import ReactDOMServer from 'react-dom/server'
import ItemsListView from "../ItemsListView";
import { render } from 'react-dom';
const ItemType = () => {

    const [collections, listCollections] = useState([]); //use at check button
    const [checkedState, setCheckedState] = useState();           //use at check button
    var selectedCollections =[]

    useEffect(() => {
        getCollections() //call at initialization
    }, []);

    function getCollections () {
        axios.get("http://localhost:8000/get_collections/")
            .then((response) => {
                listCollections(response.data.result);
                setCheckedState(new Array(response.data.result.length).fill(true))
                for (let i in response.data.result)
                    selectedCollections.push(response.data.result[i]["collection_name"])
                getCollectionsData(selectedCollections)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    function getCollectionsData (data)  {
        const container = document.getElementById('itemList');
        const root = createRoot(container);

        if (data.length==0){
            root.render(<ItemList data={null}/>);
            return
        }
        axios.post("http://localhost:8000/get_data"
            , data )
            .then((response) => {
                let allCollectionsList = []
                for (let position=0;position<response.data.results.length;position++){
                    for (let i in response.data.results[position])
                    allCollectionsList.push(response.data.results[position][i])

                    // console.log(response.data.results[position])
                }
                root.render(<ItemList data={allCollectionsList}/>);
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
            (result,currentState, index) => {

                if (currentState === true) {
                    // selectedCollections=[]
                    console.log( currentState, index,collections[index]["collection_name"])
                    selectedCollections.push(collections[index]["collection_name"])
                    console.log(selectedCollections)
                    getCollectionsData(selectedCollections)
                    return true;
                }
                else if (currentState === false){
                    console.log( currentState, index,collections[index]["collection_name"])
                    selectedCollections.pop(collections[index]["collection_name"])
                    console.log(selectedCollections)
                    getCollectionsData(selectedCollections)

                    return true;
                }
                return true;
            },
            []
        );
    };

    return (
        <div className="App">
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
    );
}
export default ItemType;