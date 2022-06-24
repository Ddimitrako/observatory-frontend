import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';
import '../App.css';
const ItemsList = ({filteredData}) => {
    let hasPriority = false
    if (!Array.isArray(filteredData) || filteredData.length==0) {
        return <div><strong>No data available</strong></div>
    }
    // {
    //     filteredData.map((item, index) => {
    //             console.log(item,index)
    //
    //         }
    //     )
    // }
    return (
        <div>
            <div className='item-container'>
                {
                    filteredData.map((item, index) => (

                        <article className="card card-product-list" key={item._id}>
                            <div className="row no-gutters">

                                <div className="col-md-12">

                                    <div className="info-main bg">
                                        <div className="container">

                                            <div className="row">
                                                <div className="col-md-8" > <Link to={'/item/' + item.name}
                                                                                 state={item}><h5><strong className="Title-Color">{item.name}</strong></h5></Link>
                                                </div>
                                                {item.priority &&
                                                <div className=" d-flex justify-content-end h5 col-md-2 center-right"><p
                                                    className=" badge font-weight-bold">Priority:
                                                </p></div>}
                                                {<div className="d-flex justify-content-start h5 col-md-2 ml-auto" ><span
                                                    className="badge badge-info text-dark" >{item.priority}</span></div>}


                                                {/*<div className="col-xs-4 ">*/}
                                                {/*</div>*/}
                                                {/*<div className="h5 col-xs-4">*/}
                                                {/*    <div className=""></div>*/}
                                                {/*</div>*/}
                                            </div>
                                            <p> {item.description} </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </article>


                    ))}
            </div>
        </div>
    );
};

// Example items, to simulate fetching from another resources.

const PaginatedItems = ({itemsData,setItemsSum}) => {
    if (itemsData === undefined) {
        itemsData = []
    }
    const itemsPerPage = 8
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState();
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [pageOffset, setPageOffset] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(itemsData.slice(itemOffset, endOffset));
        // console.log(itemsData.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(itemsData.length / itemsPerPage)); //pages number
        setItemsSum(itemsData.length)
    }, [itemOffset, itemsPerPage, itemsData]);

    useEffect(() => {        //if itemsData change go to page 1
        setPageOffset(0)
        setItemOffset(0)
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(itemsData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(itemsData.length / itemsPerPage)); //pages number
    }, [itemsData])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {

        const newOffset = event.selected * itemsPerPage % itemsData.length;
        setItemOffset(newOffset);
        setPageOffset(event.selected);
    };

    return (
        <>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
                forcePage={pageOffset}
            />
            <ItemsList filteredData={currentItems}></ItemsList>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
                forcePage={pageOffset}
            />
        </>
    );
}

export default PaginatedItems;