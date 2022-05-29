import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const ItemsList = ({filteredData}) => {
    // console.log(filteredData)
    // const [items, setItems] = useState([])

    if (!Array.isArray(filteredData)) {
        return <div>No data available</div>
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
                {filteredData.map((item, index) => (

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
// export default ItemsList;

// Example items, to simulate fetching from another resources.
const items = [...Array(33).keys()];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

const PaginatedItems = ({itemsData}) => {
    console.log(itemsData)
    if (itemsData === undefined) {
        itemsData = []
    }
    const itemsPerPage = 6
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
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(itemsData.slice(itemOffset, endOffset));
        console.log(itemsData.slice(itemOffset, endOffset))
        console.log(itemsData.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(itemsData.length / itemsPerPage)); //pages number
    }, [itemOffset, itemsPerPage, itemsData]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {

        const newOffset = event.selected * itemsPerPage % itemsData.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
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