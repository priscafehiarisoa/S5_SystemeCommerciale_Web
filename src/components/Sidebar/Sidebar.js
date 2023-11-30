/*eslint-disable*/
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [user,setUser]=useState({})


  useEffect( ()=>{
    const storedUser = localStorage.getItem('user');
    console.log("||??||"+storedUser)
    setUser((prevUser) => {
      // Vérifier si la valeur a changé avant de la mettre à jour
      if (JSON.stringify(prevUser) !== storedUser) {
        return JSON.parse(storedUser);
      } else {
        return prevUser;
      }
    });      }
  ,[]);
  const menuFournisseur=()=>{
    if(user.idservice===2){
      return (
          <>
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Fournisseurs & Produits
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/fournisseur/list") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/fournisseur/list"
                >
                  <i
                      className={
                          "fas fa-list  text-blueGray-400 mr-2 text-sm" +
                          (window.location.href.indexOf("/fournisseur/list") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300")
                      }
                  ></i>{" "}
                  Liste des Fournisseurs
                </Link>
              </li>

              <li className="items-center">
                <Link
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/fournisseur/produits/list") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/fournisseur/produits/list"
                >
                  <i className="fas fa-plus-circle text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Liste des produits
                </Link>
              </li>
              <li className="items-center">
                <Link
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/fournisseur/add") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/fournisseur/proforma/list"
                >
                  <i className="fas fa-list fa-beat text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Liste des pro forma
                </Link>
              </li>

              {/*demande mail en proforma */}
              <li className="items-center">
                <Link
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/fournisseur/produits/list") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/proforma"
                >
                  <i className="fas fa-plus-circle text-blueGray-300 mr-2 text-sm"></i>{" "}
                  demande mail proforma
                </Link>
              </li>

              {/*ajout exel en proforma */}
              <li className="items-center">
                <Link
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/fournisseur/produits/list") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/proforma/AddExelProforma"
                >
                  <i className="fas fa-plus-circle text-blueGray-300 mr-2 text-sm"></i>{" "}
                  ajouter un exel en proforma
                </Link>
              </li>

              {/*list produit fournisseur */}
              <li className="items-center">
                <Link
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/proforma/ListProduitFournisseur") !== -1
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/proforma/ListProduitFournisseur"
                >
                  <i className="fas fa-plus-circle text-blueGray-300 mr-2 text-sm"></i>{" "}
                  liste produit fournisseur
                </Link>
              </li>
            </ul>
          </>
      )
    }

  }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            SyStème Commerciale
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
{/*==============BESOINS===========*/}
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Besoin
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/besoin/list") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/besoin/list"
                >
                  <i
                    className={
                      "fas fa-list  text-blueGray-400 mr-2 text-sm" +
                      (window.location.href.indexOf("/besoin/list") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Liste des besoins
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/besoin/add") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/besoin/add"
                >
                  <i className="fas fa-plus-circle text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Ajouter des besoins
                </Link>
              </li>
            </ul>
  {/*==========FOURNISSEUR===========*/}
            {menuFournisseur()}

          </div>
        </div>
      </nav>
    </>
  );
}
