import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Headers/HeaderStats";

import React from "react";
import {FournisseurNavBar} from "../components/Navbars/FournisseurNavBar";
import {Redirect, Route, Switch} from "react-router-dom";
import {DemandeMailProforma} from "../views/proforma/DemandeMailProforma";

export const ProformaLayout=()=>{
    return(
        <div className=''>
            <Sidebar />
            <div className="relative md:ml-64  ">
                <FournisseurNavBar />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route path="/proforma" exact component={DemandeMailProforma} />
                        <Redirect from="/besoin" to="/besoin/list" />
                    </Switch>
                    {/* <FooterAdmin /> */}
                </div>
            </div>
        </div>
    )
}