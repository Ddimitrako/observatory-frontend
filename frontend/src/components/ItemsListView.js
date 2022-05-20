import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems("needs");
    }, []);

    const fetchItems = (collection) => {
        axios.get("http://localhost:8000/get_data/"+collection)
            .then((res) => {
                console.log(res.data.result);
                setItems(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (

        <div>
            <h1>Items List</h1>
            <div className='item-container'>

                {items.map((item) => (

                        <article className="card card-product-list" key={item._id}>
                            <div className="row no-gutters">

                                <div className="col-md-12">

                                    <div className="info-main bg">
                                        <div className="row">

                                            <div className="col-xs-4 text-left"><a href="/#"
                                                                                   className="h5 title col-xs-4"> {item.name}</a>
                                            </div>
                                            <div className="h5 title col-md-2 text-right">
                                                <div><span className="badge badge-primary">{item.priority}</span></div>
                                            </div>
                                        </div>
                                        <p> {item.description} </p>
                                    </div>
                                </div>

                            </div>
                        </article>


                ))}
            </div>
        </div>
    );
};
export default ItemList;