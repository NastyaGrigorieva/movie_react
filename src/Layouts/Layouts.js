import React from "react";
import {Outlet} from "react-router-dom";

import css from "./Layout.module.css";

import {Main} from "../Components/Main/Main";
import {Header} from "../Components";
import {Search} from "../Components/Search/Search";

const Layout = () => {

    return (
        <div className={css.Layout}>
            <Header/>
            <div id={"main"} className={css.flex}>
                <Main><Outlet/></Main>
                <Search/>
            </div>
        </div>
    );
};

export {Layout};