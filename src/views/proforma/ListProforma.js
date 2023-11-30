import axios from "axios";
import backendConfig from "../../config";
import {useEffect, useState} from "react";

export const ListProforma =()=>{
    const [proforma, setProforma] = useState([]);
    const link = `http://${backendConfig.host}:${backendConfig.port}`;

    useEffect(() => {
        const fetchData = async () => {
            try{
                const fo = await axios.get(link+"/produitFournisseur")
                setProforma(fo.data)
            }      catch (e) {
                console.log(e)
            }
        };
        fetchData();
    },[]);

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                        Liste des Fournisseurs
                    </h6>

                </div>
                <div className="block w-full overflow-x-auto p-4">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    ("bg-blueGray-50 text-blueGray-500 border-blueGray-100")
                                }
                            >
                                ID
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    ("bg-blueGray-50 text-blueGray-500 border-blueGray-100")
                                }
                            >
                                Fournisseur
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    ("bg-blueGray-50 text-blueGray-500 border-blueGray-100")
                                }>Produit</th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    ("bg-blueGray-50 text-blueGray-500 border-blueGray-100")
                                }
                            >taxe</th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    ("bg-blueGray-50 text-blueGray-500 border-blueGray-100")
                                }>quantite en stock</th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    ("bg-blueGray-50 text-blueGray-500 border-blueGray-100")
                                }
                            >
                                prix hors taxe
                            </th><th
                            className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                ("bg-blueGray-50 text-blueGray-500 border-blueGray-100")
                            }
                        ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {proforma.map((f) => (
                            <tr key={f.id}>
                                <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                          className={
                              "ml-3 font-bold " +
                              ("text-blueGray-600")
                          }
                      >
                        {f.id}
                      </span>
                                </th>
                                <td className=" align-middle ">
                                    {f.fournisseur.nom_fournisseur}
                                </td>
                                <td className="">
                                    {f.produit.nomProduit}
                                </td>
                                <td className="">
                                    {f.taxe}
                                </td>
                                <td className="">
                                    {f.quantiteStock}
                                </td>
                                <td className="">
                                    {f.prixHorsTaxe}
                                </td>
                                <td>
                                    <button
                                        className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Modifier
                                    </button>

                                    <button
                                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
    )

}