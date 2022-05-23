import React, {useState, useEffect} from 'react';
import axios from 'axios';
var test
function ItemList  (props)  {
    {props.data.map((item,index) => {
             // console.log(item,index)

        }
    )}
    return (

        <div>
            <div className='item-container'>
                {props.data.map((item,index) => (

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