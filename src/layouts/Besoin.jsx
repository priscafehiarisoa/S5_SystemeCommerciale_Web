import FooterAdmin from 'components/Footers/FooterAdmin';
import HeaderStats from 'components/Headers/HeaderStats';
import { BesoinNavbar } from 'components/Navbars/BesoinNavbar';
import Sidebar from 'components/Sidebar/Sidebar';
import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { AjoutBesoin } from 'views/besoin/AjoutBesoin';
import { BesoinNonValider } from 'views/besoin/BesoinNonValider';
import { ListBesoins } from 'views/besoin/ListBesoins';
import { ModifierBesoin } from 'views/besoin/ModifierBesoin';
import { Proforma } from 'views/proforma/Proforma';

export const Besoin = () => {
  return (
    <div className=''>
      <Sidebar />
      <div className="relative md:ml-64  ">
        <BesoinNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/besoin/list" exact component={ListBesoins} />
            <Route path="/besoin/listAvalider" exact component={BesoinNonValider} />
            <Route path="/besoin/add" exact component={AjoutBesoin} />
            <Route path="/besoin/update" exact component={ModifierBesoin} />
            <Route path="/besoin/proforma/:idbesoin" exact component={Proforma} />
            <Redirect from="/besoin" to="/besoin/list" />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </div>
  )
}

