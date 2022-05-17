import './App.css';
import React, {useState, useEffect} from "react";
import ItemList from "./components/ItemsListView";

function App() {
    return (
        <div className="App">
            <header class="section-header">

                <section class="header-main border-bottom">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-2 col-4">
                                <a href="/#" class="brand-wrap">
                                    DECIDO
                                </a>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <form action="#" class="search">
                                    <div class="input-group w-100">
                                        <input type="text" class="form-control"
                                               placeholder="Search Text inside Descriptions"/>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="submit">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </header>


            <section class="section-pagetop bg">
                <div class="container">
                    <h2 class="title-page">Items</h2>
                </div>
            </section>

            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-md-3">

                            <div class="card">
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse_1"
                                           aria-expanded="true" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">Item type</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_1">
                                        <div class="card-body">
                                            <form class="pb-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control"
                                                           placeholder="Search Text inside Descriptions"/>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button"><i
                                                            class="fa fa-search"></i></button>
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
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse_2"
                                           aria-expanded="true" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">Item type </h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_2">
                                        <div class="card-body">
                                            <label class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input"/>
                                                <div class="custom-control-label">Needs
                                                    <b class="badge badge-pill badge-light float-right">120</b></div>
                                            </label>
                                            <label class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input"/>
                                                <div class="custom-control-label">Challenges
                                                    <b class="badge badge-pill badge-light float-right">15</b></div>
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
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse_5"
                                           aria-expanded="true" className="">
                                            <i className="icon-control fa fa-chevron-down"></i>
                                            <h6 className="title">Item type </h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse in" id="collapse_5">
                                        <div class="card-body">
                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" checked=""
                                                       class="custom-control-input"/>
                                                <div class="custom-control-label">Any Priority</div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input"/>
                                                <div class="custom-control-label">High</div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input"/>
                                                <div class="custom-control-label">Medium</div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input"/>
                                                <div class="custom-control-label">Low</div>
                                            </label>
                                        </div>
                                    </div>
                                </article>
                            </div>

                        </aside>
                        <main class="col-md-9">

                            <header class="border-bottom mb-4 pb-3">
                                <div class="form-inline">
                                    <span class="mr-md-auto">32 Items found </span>
                                    <select class="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Oldest items</option>
                                    </select>
                                </div>
                            </header>

                            <ItemList/>

                            <nav class="mt-4" aria-label="Page navigation sample">
                                <ul class="pagination">
                                    <li class="page-item disabled"><a class="page-link" href="/#">Previous</a></li>
                                    <li class="page-item active"><a class="page-link" href="/#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="/#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="/#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="/#">Next</a></li>
                                </ul>
                            </nav>

                        </main>

                    </div>

                </div>
            </section>

            <footer class="section-footer border-top padding-y">
                <div class="container">
                    <p class="float-md-right">
                        &copy; Copyright 2021 All rights reserved
                    </p>
                    <p>
                        <a href="/#">Terms and conditions</a>
                    </p>
                </div>
            </footer>


        </div>
    );
}

export default App;