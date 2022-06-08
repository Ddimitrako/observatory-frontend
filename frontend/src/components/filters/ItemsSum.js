import React, {useState, useEffect} from 'react';

const ItemsSum = ({itemsSum}) => {

    useEffect(() => {
    }, [itemsSum])

    return (

        <b className="badge badge-pill badge-light float-right">{itemsSum} Items Found</b>
    );
}
export default ItemsSum;