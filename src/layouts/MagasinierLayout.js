import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";
import React from "react";
import {MagasinierNavBar} from "../components/Navbars/MagasinierNavBar";
import {IndexMagasinier} from "../views/magasinier/IndexMagasinier";
import {Route, Switch} from "react-router-dom";

export const MagasinierLayout=()=>{
    return(
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <MagasinierNavBar />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route path="/magasinier" exact component={IndexMagasinier} />
                    </Switch>
                </div>
            </div>
        </>
    )
}