
import React, {useState, useEffect} from "react";
import ItemList from "../../components/ItemsListView";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Home=()=>{
    return  (

        <div className="Home">
            <header className="section-header">
                <div><Navbar/></div>
                {/*<section class="header-main border-bottom">*/}
                {/*    <div class="container">*/}
                {/*        <div class="row align-items-center">*/}
                {/*            <div class="col-lg-2 col-4">*/}
                {/*                <a href="/#" class="brand-wrap">*/}
                {/*                    DECIDO*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div class="col-lg-6 col-sm-12">*/}
                {/*                <form action="#" class="search">*/}
                {/*                    <div class="input-group w-100">*/}
                {/*                        <input type="text" class="form-control"*/}
                {/*                               placeholder="Search Text inside Descriptions"/>*/}
                {/*                        <div class="input-group-append">*/}
                {/*                            <button class="btn btn-primary" type="submit">*/}
                {/*                                <i class="fa fa-search"></i>*/}
                {/*                            </button>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </form>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </header>


            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Items</h2>
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
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"/>
                                                <div className="custom-control-label">Needs
                                                    <b className="badge badge-pill badge-light float-right">120</b></div>
                                            </label>
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"/>
                                                <div className="custom-control-label">Challenges
                                                    <b className="badge badge-pill badge-light float-right">15</b></div>
                                            </label>

                                        </div>
                                    </div>
                                </article>
                                {/*<article class="filter-group">*/}
                                {/*    <header class="card-header">*/}
                                {/*        <a href="/#" data-toggle="collapse" data-target="#collapse_4"*/}
                                {/*           aria-expanded="false" class="">*/}
                                {/*            <i class="icon-control fa fa-chevron-down"></i>*/}
                                {/*            <h6 class="title">Item type</h6>*/}
                                {/*        </a>*/}
                                {/*    </header>*/}
                                {/*    <div class="filter-content collapse show" id="collapse_4">*/}
                                {/*        <div class="card-body">*/}
                                {/*            <label class="checkbox-btn">*/}
                                {/*                <input type="checkbox"/>*/}
                                {/*                <span class="btn btn-light"> Needs </span>*/}
                                {/*            </label>*/}

                                {/*            <label class="checkbox-btn">*/}
                                {/*                <input type="checkbox"/>*/}
                                {/*                <span class="btn btn-light"> Challenges </span>*/}
                                {/*            </label>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</article>*/}
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
                                                <input type="radio" name="myfilter_radio" checked=""
                                                       className="custom-control-input"/>
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

                            <ItemList/>

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