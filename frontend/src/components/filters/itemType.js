import React, {useState, useEffect} from 'react';
import ItemList from "../ItemsListView";
import axios from "axios";

import ReactDOMServer from 'react-dom/server'
const ItemType=()=> {

  const [items, listCollections] = useState([]);
  useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get("http://localhost:8000/get_collections/")
            .then((res) => {
                // console.log(res.data.result);
                listCollections(res.data.result);
                // console.log(listCollections)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    // const getSumOfCollection = (collection) => {
    //     axios.get("http://localhost:8000/get_data/"+collection)
    //         .then((res) => {
    //           // console.log(res.data.result.length)
    //           return (
    //               ReactDOMServer.renderToString(<div>res.data.result.length</div>)
    //
    //               );
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

  const [checkedState, setCheckedState] = useState(
    new Array(3).fill(false)
  );

  const [total, setTotal] = useState(0);

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

                sum = sum +"|"+ items[index]
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
        {items.map((index,row) => {
            // console.log(checkedState[row],row)
          return (
            <li key={index} style={{listStyleType:'none'}}>
              <div className="listCollections-list-item " >

                  <input style={{"height": '1.2em',"width" : "1.2em"}}
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={index}
                    value={index}
                    checked={checkedState[row]}
                    onChange={() => handleOnChange(row)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`} style={{ marginLeft: '.5rem' }} >{index}</label>
                  {/*<b className="badge badge-pill badge-light float-right">{getSumOfCollection(index)}</b>*/}

              </div>
            </li>
          );
        })}


    </div>
  );
}
export default ItemType;