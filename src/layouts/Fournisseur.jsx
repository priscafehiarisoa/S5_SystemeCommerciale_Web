import HeaderStats from 'components/Headers/HeaderStats'
import { FournisseurNavBar } from 'components/Navbars/FournisseurNavBar'
import Sidebar from 'components/Sidebar/Sidebar'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { AjouterFournisseur } from 'views/fournisseur/AjouterFournisseur'
import { ListeFournisseur } from 'views/fournisseur/ListeFournisseur'
import { AjouterProduits } from 'views/produits/AjouterProduits'
import { ListeProduits } from 'views/produits/ListeProduits'

export const Fournisseur = () => {
  return (
    <div className=''>
      <Sidebar />
      <div className="relative md:ml-64  ">
        <FournisseurNavBar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/fournisseur/list" exact component={ListeFournisseur} />
            <Route path="/fournisseur/add" exact component={AjouterFournisseur} />
            <Route path="/fournisseur/produits/list" exact component={ListeProduits} />
            <Route path="/fournisseur/produits/add" exact component={AjouterProduits} />
            <Redirect from="/fournisseur" to="/fournisseur/list" />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </div>
  )
}

