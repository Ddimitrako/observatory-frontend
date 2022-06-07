
import React, {useState, useEffect} from 'react';

const ItemsSum = ({sum}) => {
    return (

        <b className="badge badge-pill badge-light float-right">{sum} Items Found</b>
    );
}
export default ItemsSum;