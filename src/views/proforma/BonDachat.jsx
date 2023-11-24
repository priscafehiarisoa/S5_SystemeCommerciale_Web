import React from 'react'

export const BonDachat = ({fournisseur}) => {
    const formatDate=(dateBonDeCommande)=>{
      const localDateTime = new Date(Date.UTC(...dateBonDeCommande));
    const formattedDateTime = `${localDateTime.toISOString().slice(0, 19)}.${localDateTime.getUTCMilliseconds().toString().padStart(3, '0')}`;
      // return formattedDateTime;
      JSON.stringify()
  }



    const color = "light";
  return (
    <div className="w-full px-4  mt-4 text-left">
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Fournisseur:</span> {fournisseur.fournisseur.nom_fournisseur}
                  </p>
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Prix de livraison:</span> {fournisseur.fournisseur.prix_livraison}
                  </p>
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Nom du responsable:</span> {fournisseur.fournisseur.nom_responsable}
                  </p>
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Adresse:</span> {fournisseur.fournisseur.adresse}
                  </p>
                  <p className=" text-lg">
                    {" "}
                    {/* <span className=" font-bold">Date: {formatDate(fournisseur.fournisseur.dateBonDeCommande)} ii</span> */}
                  </p>
                  <br />
                  <br />
                  <hr />
                  <br /><br />
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Entreprise: JVP</span>
                  </p>
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Adresse: Andoharanofotsy</span>
                  </p>
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Responsable: Jeddy Ranivoaritida</span>
                  </p>
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Téléphone: 0340123456</span>
                  </p>
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Mail: jeddy100@hotmail.com</span>
                  </p>
                  <div className="block w-full overflow-x-auto mt-4">
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
                            Désignation
                          </th>
                          <th
                            className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                              (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                            }
                          >
                            Quantité
                          </th>
                          <th
                            className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                              (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                            }
                          >
                            Prix HT
                          </th>
                          <th
                            className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                              (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                            }
                          >
                            Prix Unitaire
                          </th>
                          <th
                            className={
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                              (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                            }
                          >
                            Prix TTC
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {fournisseur.listeArticles.map((article) => (
                          <tr key={article.id}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center">
                              <span
                                className={
                                  "ml-3 font-bold " +
                                  (color === "light"
                                    ? "text-blueGray-600"
                                    : "text-white")
                                }
                              >
                                {article.designation}
                              </span>
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                              {article.quantite}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                {article.prixHorsTaxe}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                {article.prixUnitaire}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                                {article.prixTTC}
                            </td>
                          </tr>
                        ))}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center">
                              <span
                                className={
                                  "ml-3 font-bold " +
                                  (color === "light"
                                    ? "text-blueGray-600"
                                    : "text-white")
                                }
                              >
                                TOTAL HT:
                              </span>
                            </th>
                            <td>{fournisseur.totalHorsTaxes} Ariary</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center">
                              <span
                                className={
                                  "ml-3 font-bold " +
                                  (color === "light"
                                    ? "text-blueGray-600"
                                    : "text-white")
                                }
                              >
                                TTC:
                              </span>
                            </th>
                            <td>{fournisseur.totalTTC} Ariary</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
  )
}

