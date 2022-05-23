
import React, {useState, useEffect} from "react";
import ItemList from "../../components/ItemsListView";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ItemType from "../../components/filters/itemType";

const Home=()=>{
    return  (
        <div className="Home">
            <header className="section-header">
                <div><Navbar/></div>
            </header>
            <section className="section-pagetop bg">
                <div className="container">
                    <h5 className="title-page">Items</h5>
                </div>
            </section>

            <section className="section-content padding-y">
                <div className="container">

                    <div className="row">
                        <aside className="col-md-3">

                            <div className="card">
                                <article className="filter-group">
                                    <header className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse_1"
                                           aria-expanded="true" className="">
                                            <i className="icon-control fa fa-chevron-down"></i>
                                            <h6 className="title">Item type</h6>
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

                                            {/*<ul class="list-menu">*/}
                                            {/*    <li><a href="/#">Needs </a></li>*/}
                                            {/*    <li><a href="/#">Challenges </a></li>*/}
                                            {/*</ul>*/}

                                        </div>
                                    </div>
                                </article>
                                <article className="filter-group">
                                    <header className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse_2"
                                           aria-expanded="true" className="">
                                            <i className="icon-control fa fa-chevron-down"></i>
                                            <h6 className="title">Item type </h6>
                                        </a>
                                    </header>
                                    <div className="filter-content collapse show" id="collapse_2">
                                        <div className="card-body">
                                            <ItemType/>
                                        </div>
                                    </div>
                                </article>
                                <article className="filter-group">
                                    <header className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse_5"
                                           aria-expanded="true" className="">
                                            <i className="icon-control fa fa-chevron-down"></i>
                                            <h6 className="title">Item type </h6>
                                        </a>
                                    </header>
                                    <div className="filter-content collapse in" id="collapse_5">
                                        <div className="card-body">
                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio"
                                                       className="custom-control-input"  />
                                                <div className="custom-control-label">Any Priority</div>
                                            </label>

                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                                                <div className="custom-control-label">High</div>
                                            </label>

                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                                                <div className="custom-control-label">Medium</div>
                                            </label>

                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                                                <div className="custom-control-label">Low</div>
                                            </label>
                                        </div>
                                    </div>
                                </article>
                            </div>

                        </aside>
                        <main className="col-md-9">

                            <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">32 Items found </span>
                                    <select className="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Oldest items</option>
                                    </select>
                                </div>
                            </header>

                            <div id ="itemList">
                                {/*<ItemList/>*/}
                            </div>

                            <nav className="mt-4" aria-label="Page navigation sample">
                                <ul className="pagination">
                                    <li className="page-item disabled"><a className="page-link" href="/#">Previous</a></li>
                                    <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="/#">Next</a></li>
                                </ul>
                            </nav>

                        </main>

                    </div>

                </div>
            </section>
            <Footer/>



        </div>
    )
}

export default Home;