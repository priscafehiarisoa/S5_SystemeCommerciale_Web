import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import backendConfig from "config";
import axios from "axios";

export const ListBesoins = ({ color }) => {
  color = "light";

  const [listBesoins, setlistBesoins] = useState([]);
  const link = `http://${backendConfig.host}:${backendConfig.port}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(link+"/besoin");

        // console.log(response.data);
        setlistBesoins(response.data);
        // Handle the response data
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchData();
  }, []);
// setlistBesoins([
//     {
//         "besoin": {
//             "id": 11,
//             "service": {
//                 "id": 1,
//                 "nomService": "IT"
//             },
//             "quantite": 0,
//             "motif": "besoin service 1 ",
//             "besoinProduits": null,
//             "etat": 0
//         },
//         "listeBesoin": [
//             {
//                 "id": 11,
//                 "quantite": 55,
//                 "besoin": {
//                     "id": 11,
//                     "service": {
//                         "id": 1,
//                         "nomService": "IT"
//                     },
//                     "quantite": 0,
//                     "motif": "besoin service 1 ",
//                     "besoinProduits": null,
//                     "etat": 0
//                 },
//                 "produit": {
//                     "id": 1,
//                     "nomProduit": "cache bouche",
//                     "etat": 0
//                 }
//             },
//             {
//                 "id": 12,
//                 "quantite": 34,
//                 "besoin": {
//                     "id": 11,
//                     "service": {
//                         "id": 1,
//                         "nomService": "IT"
//                     },
//                     "quantite": 0,
//                     "motif": "besoin service 1 ",
//                     "besoinProduits": null,
//                     "etat": 0
//                 },
//                 "produit": {
//                     "id": 2,
//                     "nomProduit": "gel desinfectant",
//                     "etat": 0
//                 }
//             },
//             {
//                 "id": 13,
//                 "quantite": 15,
//                 "besoin": {
//                     "id": 11,
//                     "service": {
//                         "id": 1,
//                         "nomService": "IT"
//                     },
//                     "quantite": 0,
//                     "motif": "besoin service 1 ",
//                     "besoinProduits": null,
//                     "etat": 0
//                 },
//                 "produit": {
//                     "id": 3,
//                     "nomProduit": "alcool",
//                     "etat": 0
//                 }
//             }
//         ]
//     },
//     {
//         "besoin": {
//             "id": 12,
//             "service": {
//                 "id": 1,
//                 "nomService": "IT"
//             },
//             "quantite": 0,
//             "motif": "test 4",
//             "besoinProduits": null,
//             "etat": 0
//         },
//         "listeBesoin": [
//             {
//                 "id": 14,
//                 "quantite": 567,
//                 "besoin": {
//                     "id": 12,
//                     "service": {
//                         "id": 1,
//                         "nomService": "IT"
//                     },
//                     "quantite": 0,
//                     "motif": "test 4",
//                     "besoinProduits": null,
//                     "etat": 0
//                 },
//                 "produit": {
//                     "id": 1,
//                     "nomProduit": "cache bouche",
//                     "etat": 0
//                 }
//             }
//         ]
//     },
//     {
//         "besoin": {
//             "id": 13,
//             "service": {
//                 "id": 1,
//                 "nomService": "IT"
//             },
//             "quantite": 0,
//             "motif": "besoin service 55 ",
//             "besoinProduits": null,
//             "etat": 0
//         },
//         "listeBesoin": []
//     },
//     {
//         "besoin": {
//             "id": 14,
//             "service": {
//                 "id": 1,
//                 "nomService": "IT"
//             },
//             "quantite": 0,
//             "motif": "besoin service 55 ",
//             "besoinProduits": null,
//             "etat": 0
//         },
//         "listeBesoin": [
//             {
//                 "id": 15,
//                 "quantite": 100,
//                 "besoin": {
//                     "id": 14,
//                     "service": {
//                         "id": 1,
//                         "nomService": "IT"
//                     },
//                     "quantite": 0,
//                     "motif": "besoin service 55 ",
//                     "besoinProduits": null,
//                     "etat": 0
//                 },
//                 "produit": {
//                     "id": 1,
//                     "nomProduit": "cache bouche",
//                     "etat": 0
//                 }
//             },
//             {
//                 "id": 16,
//                 "quantite": 400,
//                 "besoin": {
//                     "id": 14,
//                     "service": {
//                         "id": 1,
//                         "nomService": "IT"
//                     },
//                     "quantite": 0,
//                     "motif": "besoin service 55 ",
//                     "besoinProduits": null,
//                     "etat": 0
//                 },
//                 "produit": {
//                     "id": 2,
//                     "nomProduit": "gel desinfectant",
//                     "etat": 0
//                 }
//             },
//             {
//                 "id": 17,
//                 "quantite": 200,
//                 "besoin": {
//                     "id": 14,
//                     "service": {
//                         "id": 1,
//                         "nomService": "IT"
//                     },
//                     "quantite": 0,
//                     "motif": "besoin service 55 ",
//                     "besoinProduits": null,
//                     "etat": 0
//                 },
//                 "produit": {
//                     "id": 3,
//                     "nomProduit": "alcool",
//                     "etat": 0
//                 }
//             }
//         ]
//     }
// ])
  const besoins = [
    {
      idbesoin: 1,
      etat: 0,
      articles: [
        {
          idarticle: 1,
          nomarticle: "Ordinateur Portable",
        },
        {
          idarticle: 2,
          nomarticle: "Imprimante",
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
        },
        {
          idarticle: 4,
          nomarticle: "Clavier sans fil",
        },
      ],
    },
  ];

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
  const filteredBesoins =user.poste === 'DG'
    ? listBesoins.filter(besoin => besoin.besoin.etat === 0)
    : listBesoins.filter(besoin => besoin.besoin.etat === 1);
  const [selectedIdBesoin, setSelectedIdBesoin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (idbesoin) => {
    setSelectedIdBesoin(idbesoin);
    setShowModal(true);
  };

  const history = useHistory();

  const handleGenerateProforma = (idbesoin) => {
    // Replace '/article/:idbesoin' with the actual route you want to navigate to
    // You can also include parameters by appending them to the URL
    console.log("first");
    history.push(`/besoin/proforma/${idbesoin}`);
  };
//   console.log(JSON.stringify(listBesoins))

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
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredBesoins.map((besoin) => (
                  <tr key={besoin.besoin.id}>
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-3 font-bold " +
                          (color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {besoin.besoin.id}
                      </span>
                    </th>
                    <td>
                      {besoin.etat === 1
                        ? "Validé"
                        : besoin.besoin.etat === 0
                        ? "En Attente"
                        : besoin.besoin.etat === 2
                        ? "Refusé"
                        : "Inconnu"}
                    </td>
                    <td className="">
                      <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => openModal(besoin.idbesoin)}
                      >
                        Articles
                      </button>
                      {besoin.besoin.etat === 1 && (
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() =>
                            handleGenerateProforma(besoin.besoin.id)
                          }
                        >
                          Generer Pro forma
                        </button>
                      )}

                      {user.poste === "DG" && (
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() =>
                            handleGenerateProforma(besoin.idbesoin)
                          }
                        >
                          Valider
                        </button>
                      )}

                      <button
                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        {" "}
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" border-2 px-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Liste des articles dont on abesoin
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th>ID Article</th>
                        <th>Nom Article</th>
                      </tr>
                    </thead>
                    <tbody>
                      {besoins
                        .find((besoin) => besoin.besoin.id === selectedIdBesoin)
                        .listeBesoin.produits.map((article) => (
                          <tr key={article.id} className=" text-center">
                            <td>{article.id}</td>
                            <td>{article.nomProduit}</td>
                          </tr>
                        ))}
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
      ) : null}
    </>
  );
};


    //     [
    //         {
    //         "id": 11,
    //         "service": {
    //             "id": 1,
    //             "nomService": "IT"
    //         },
    //         "motif": "besoin service 1 ",
    //         "besoinProduits": [
    //             {
    //                 "id": 1,
    //                 "nomProduit": "cache bouche",
    //                 "quantite": 200
    //             },
    //             {
    //                 "id": 2,
    //                 "nomProduit": "Geln Main",
    //                 "quantite": 20
    //             },

    //         ],
    //         "etat": 0
    //     },

    //     {
    //         "id": 12,
    //         "service": {
    //             "id": 2,
    //             "nomService": "Finance"
    //         },
    //         "motif": "besoin service 1 ",
    //         "besoinProduits": [
    //             {
    //                 "id": 1,
    //                 "nomProduit": "cache bouche",
    //                 "quantite": 200
    //             },
    //             {
    //                 "id": 2,
    //                 "nomProduit": "Geln Main",
    //                 "quantite": 20
    //             },

    //         ],
    //         "etat": 0
    //     },


    // ]



    //     "listeBesoin": [

    //         {
    //             "id": 12,
    //             "quantite": 34,
    //             "besoin": {
    //                 "id": 11,
    //                 "service": {
    //                     "id": 1,
    //                     "nomService": "IT"
    //                 },
    //                 "quantite": 0,
    //                 "motif": "besoin service 1 ",
    //                 "besoinProduits": null,
    //                 "etat": 0
    //             },
    //             "produit": {
    //                 "id": 2,
    //                 "nomProduit": "gel desinfectant",
    //                 "etat": 0
    //             }
    //         },
    //         {
    //             "id": 13,
    //             "quantite": 15,
    //             "besoin": {
    //                 "id": 11,
    //                 "service": {
    //                     "id": 1,
    //                     "nomService": "IT"
    //                 },
    //                 "quantite": 0,
    //                 "motif": "besoin service 1 ",
    //                 "besoinProduits": null,
    //                 "etat": 0
    //             },
    //             "produit": {
    //                 "id": 3,
    //                 "nomProduit": "alcool",
    //                 "etat": 0
    //             }
    //         }
    //     ]
    // },
    // {
    //     "besoin": {
    //         "id": 12,
    //         "service": {
    //             "id": 1,
    //             "nomService": "IT"
    //         },
    //         "quantite": 0,
    //         "motif": "test 4",
    //         "besoinProduits": null,
    //         "etat": 0
    //     },
    //     "listeBesoin": [
    //         {
    //             "id": 14,
    //             "quantite": 567,
    //             "besoin": {
    //                 "id": 12,
    //                 "service": {
    //                     "id": 1,
    //                     "nomService": "IT"
    //                 },
    //                 "quantite": 0,
    //                 "motif": "test 4",
    //                 "besoinProduits": null,
    //                 "etat": 0
    //             },
    //             "produit": {
    //                 "id": 1,
    //                 "nomProduit": "cache bouche",
    //                 "etat": 0
    //             }
    //         }
    //     ]
    // },
    // {
    //     "besoin": {
    //         "id": 13,
    //         "service": {
    //             "id": 1,
    //             "nomService": "IT"
    //         },
    //         "quantite": 0,
    //         "motif": "besoin service 55 ",
    //         "besoinProduits": null,
    //         "etat": 0
    //     },
    //     "listeBesoin": []
    // },
    // {
    //     "besoin": {
    //         "id": 14,
    //         "service": {
    //             "id": 1,
    //             "nomService": "IT"
    //         },
    //         "quantite": 0,
    //         "motif": "besoin service 55 ",
    //         "besoinProduits": null,
    //         "etat": 0
    //     },
    //     "listeBesoin": [
    //         {
    //             "id": 15,
    //             "quantite": 100,
    //             "besoin": {
    //                 "id": 14,
    //                 "service": {
    //                     "id": 1,
    //                     "nomService": "IT"
    //                 },
    //                 "quantite": 0,
    //                 "motif": "besoin service 55 ",
    //                 "besoinProduits": null,
    //                 "etat": 0
    //             },
    //             "produit": {
    //                 "id": 1,
    //                 "nomProduit": "cache bouche",
    //                 "etat": 0
    //             }
    //         },
    //         {
    //             "id": 16,
    //             "quantite": 400,
    //             "besoin": {
    //                 "id": 14,
    //                 "service": {
    //                     "id": 1,
    //                     "nomService": "IT"
    //                 },
    //                 "quantite": 0,
    //                 "motif": "besoin service 55 ",
    //                 "besoinProduits": null,
    //                 "etat": 0
    //             },
    //             "produit": {
    //                 "id": 2,
    //                 "nomProduit": "gel desinfectant",
    //                 "etat": 0
    //             }
    //         },
    //         {
    //             "id": 17,
    //             "quantite": 200,
    //             "besoin": {
    //                 "id": 14,
    //                 "service": {
    //                     "id": 1,
    //                     "nomService": "IT"
    //                 },
    //                 "quantite": 0,
    //                 "motif": "besoin service 55 ",
    //                 "besoinProduits": null,
    //                 "etat": 0
    //             },
    //             "produit": {
    //                 "id": 3,
    //                 "nomProduit": "alcool",
    //                 "etat": 0
    //             }
    //         }
    //     ]
    // }
