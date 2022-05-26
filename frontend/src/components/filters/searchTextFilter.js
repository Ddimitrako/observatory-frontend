import PriorityFilter from "./priorityFilter";
import React from "react";


const SearchTextFilter = ({visible}) => {
    // console.log(visible)
    if (visible == false) {
        return (<div></div>)
    }
    return (
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
    )
}
export default SearchTextFilter;