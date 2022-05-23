import React, {useState, useEffect} from 'react';
import ItemList from "../ItemsListView";
import axios from "axios";

import ReactDOMServer from 'react-dom/server'

const ItemType=()=> {

  const [collections, listCollections] = useState([]);
  const [checkedState, setCheckedState] = useState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get("http://localhost:8000/get_collections/")
            .then((response) => {
                     listCollections(response.data.result);
                     setCheckedState(new Array(response.data.result.length).fill(true))
            })
            .catch((err) => {
                console.log(err);
            });
    };

  const handleOnChange = (collection) => {
        const updatedCheckedState = checkedState.map((item, index) =>{
            // console.log(collection,item)
         return index === collection ? !item : item
          }
        );
        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
          (sum, currentState, index) => {

            if (currentState === true) {

                sum = sum +"|"+ collections[index]
                console.log(sum)
              return sum;
            }
            return sum;
          },
          ""
        );
        setTotal(totalPrice);
  };

  return (
    <div className="App">
        {collections.map((index,row) => {
            // console.log(checkedState[row],row,index)
          return (
            <li key={index["collection_name"]} style={{listStyleType:'none'}}>
              <div className="listCollections-list-item " >

                  <input style={{"height": '1.2em',"width" : "1.2em"}}
                    type="checkbox"
                    id={`custom-checkbox-${index["collection_name"]}`}
                    name={index["collection_name"]}
                    value={index["collection_name"]}
                    checked={checkedState[row]}
                    onChange={() => handleOnChange(row)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`} style={{ marginLeft: '.5rem' }} >{index["collection_name"]}</label>
                  <b className="badge badge-pill badge-light float-right">{index["count"]}</b>
              </div>
            </li>
          );
        })}


    </div>
  );
}
export default ItemType;