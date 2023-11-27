import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import backendConfig from "config";
import axios from "axios";

export const ListBesoins = ({ color }) => {
  color = "light";

  const [listBesoins, setlistBesoins] = useState([]);
  const [valide,setValide]=useState(null)
  const link = `http://${backendConfig.host}:${backendConfig.port}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(link+"/besoin");
          console.log(link+"/besoin")

          console.log("besoin "+JSON.stringify(response.data));
          setlistBesoins(response.data);
          console.log(listBesoins);
        // Handle the response data
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchData();
  }, []);

  const [besoinProduit,setBesoinProduit]=useState([])

  const besoins = [
    {
      idbesoin: 1,
      etat: 0,
      articles: [
        {
          idarticle: 1,
          nomarticle: "Ordinateur Portable",
          quantite: 3
        },
        {
          idarticle: 2,
          nomarticle: "Imprimante",
          quantite: 3

        },
      ],
    },
    {
      idbesoin: 2,
      etat: 1,
      articles: [
        {
          idarticle: 3,
          nomarticle: "Écran LCD",
          quantite: 3

        },
        {
          idarticle: 4,
          nomarticle: "Clavier sans fil",
          quantite: 3

        },
      ],
    },
  ];

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
  const filteredBesoins =user.idservice === -1
    ? listBesoins.filter(b => b.etat === 10)
    :user.idservice === 1 && user.poste==='employe' ? listBesoins.filter(b => b.service.id === 1 )
    :user.idservice === 1 && user.poste==='responsable' ? listBesoins.filter(b => b.service.id === 1)
    :user.idservice === 2 && user.poste==='employe' ? listBesoins.filter(b => b.service.id === 2 )
    :user.idservice === 2 && user.poste==='responsable' ? listBesoins.filter(b=> b.service.id )
    : listBesoins.filter(b => b.etat === 10);
  const [selectedIdBesoin, setSelectedIdBesoin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = async (idbesoin) => {
    setSelectedIdBesoin(idbesoin);
    try{
      const resp = await axios.get(link+"/besoin/"+selectedIdBesoin)
      setBesoinProduit(resp.data)
      setShowModal(true);
    }
    catch (e) {
      console.log(e)
    }
  };

  const handleValider1= async (id) =>{
    try {
      const response = await axios.put(link+"/besoin/valider1/"+id);
      console.log(link+"/besoin/valider1/"+id)
      console.log(response.data);
      setValide(id)
      // Handle the response data
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors
    }
  }

  const boutonValider=(id,etat)=>{
    if(user.idservice===2 && user.poste==="responsable" && etat!==20){
      return (

          <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() =>
                  handleValider1(id)
              }
          >
            Valider
          </button>

      )
    }
    else if(user.idservice===-1)
      return (

          <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() =>
                  handleValider(id)
              }
          >
            Valider
          </button>

      )
    else{
      return (<></>)
    }
  }
  const contenuModal=()=>{
    return(
        <>
          <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
              onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" border-2 px-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Liste des articles dont on a besoin
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                    <tr>
                      <th>ID Article</th>
                      <th>Nom Article</th>
                      <th>quantite des besoin</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       besoinProduit?.
                       map((article) => (
                        <tr key={article.id} className=" text-center">
                          <td>{article.id}</td>
                          <td>{article.produit.nomProduit}</td>
                          <td>{article.quantite}</td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
  }

  const history = useHistory();

  const handleGenerateProforma = (idbesoin) => {
    // Replace '/article/:idbesoin' with the actual route you want to navigate to
    // You can also include parameters by appending them to the URL
    console.log("first");
    history.push(`/besoin/proforma/${idbesoin}`);
  };
//   console.log(JSON.stringify(listBesoins))

const handleValider= async(idbesoin) =>{
  try {
    const response = await axios.put(link+"/besoin/valider2/"+idbesoin);
      console.log(link+"/besoin/valider2/"+idbesoin)
      console.log(response.data);
    // Handle the response data
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle errors
  }
}
  return (
    <>
      <div className="w-full mb-12 px-4">
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                    <span className="text-left"> Liste des Besoins</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto p-4">
            {showModal? contenuModal():""}
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    ID
                  </th>
                  <th className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  } >motif</th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Etat
                  </th>

                  <th className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }>service</th>
                  <th className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }></th>
                  {/*<th className={*/}
                  {/*    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +*/}
                  {/*    (color === "light"*/}
                  {/*        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"*/}
                  {/*        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")*/}
                  {/*}></th>*/}
                  {/*<th className={*/}
                  {/*    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +*/}
                  {/*    (color === "light"*/}
                  {/*        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"*/}
                  {/*        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")*/}
                  {/*}></th>*/}
                </tr>
              </thead>
              <tbody>
                {filteredBesoins.map((besoin) => (

                  <tr key={besoin.id}>

                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-3 font-bold " +
                          (color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {besoin.id}
                      </span>
                    </th>
                    <td>{besoin.motif}</td>
                    <td>
                      {besoin.etat === 20
                        ? "Validé"
                        : besoin.etat === 0
                        ? "En Attente"
                        : besoin.etat === 10
                        ? "validé par le responsable"
                        : besoin.etat === -1
                        ? "Refusé"
                        : "Inconnu"}
                    </td>
                    <td>
                      {besoin.service.nomService}
                    </td>
                    <td className="">
                      <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => openModal(besoin.id)}
                      >
                        Articles
                      </button>


                      {/*bouton valider */}
                      {boutonValider(besoin.id,besoin.etat)}

                      {(user.poste==="responsable" || user.poste==="directeur" || user.poste==="DG") && (<button
                          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                      >
                        {" "}
                        Supprimer
                      </button>)}

                      {besoin.etat === 20 && (
                          <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() =>
                                  handleGenerateProforma(besoin.id)
                              }
                          >
                            Generer Pro forma
                          </button>
                      )}
                    </td>

                  </tr>

                    )
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>

      {}
    </>
  );
};
