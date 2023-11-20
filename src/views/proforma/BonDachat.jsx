import React from 'react'

export const BonDachat = ({fournisseur}) => {
    const color = "light";
  return (
    <div className="w-full px-4  mt-4 text-left">
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Fournisseur:</span> {fournisseur.nomFournisseur}
                  </p>
                  <p className=" text-lg">
                    {" "}
                    <span className=" font-bold">Delai:</span> {fournisseur.delai}
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
                            Taxe %
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
                        {fournisseur.articles.map((article) => (
                          <tr key={article.idarticle}>
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
                                {article.taxe}
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
                            <td>678900 Ariary</td>
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
                            <td>699900 Ariary</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
  )
}

