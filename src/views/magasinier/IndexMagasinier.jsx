import {useEffect, useState} from "react";
import axios from "axios";
import backendConfig from "../../config";

export const IndexMagasinier=({color})=>{
    color = "light";
    const link = `http://${backendConfig.host}:${backendConfig.port}`;
    const [indexes,setIndexes]=useState(0)
    const [fournisseur, setFournisseur]= useState([])

    const [file,setFile]=useState()
    const [form,setForm]=useState({
        prixHt:0,
        prixTTC: 0,
        idFournisseur:"",
        dateFacture: "" ,
        idBonsDeCommande: 18 ,
        idMagasinier: 8,
        dateReception:"" ,
        nomDuLivreur: "" ,
        details:[
            {
                produits: 1,
                quantite: 12
            }
        ]
    })
    useEffect(()=> {
        const fetchdata=async() => {
            try{
                const response = await axios.get(link + "/fournisseur")
                setFournisseur(response.data)
            }catch (e) {
                console.log(e)
            }
        };
        fetchdata();
    },[]

    )

    console.log(JSON.stringify(fournisseur))
    return (
        <>
        {/*    formulaires */}
            <div className="w-full mb-12 px-4 ">
                <div
                    className={
                        "relative flex flex-col min-w-0 break-words w-full h-80 mb-6 shadow-lg rounded " +
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
                                    Bons de Reception
                                </h3>
                            </div>


                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto px-12 ">

                        {/*facture */}
                        <div className="rounded-t  mb-3 mt-3 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3
                                        className={
                                            "font-semibold text-lg " +
                                            (color === "light" ? "text-blueGray-700" : "text-white")
                                        }
                                    >
                                        Facture
                                    </h3>
                                </div>


                            </div>
                        </div>

                        <div className="mb-4 mb-3">
                            <label
                                htmlFor="nom_fournisseur"
                                className="block text-gray-600 text-sm font-medium mb-2"
                            >
                                uploader le fichier de la facture
                            </label>
                            <input
                                type="file"
                                name="fileFacture"
                                className="w-full px-3 py-2  pb-4 rounded border-0 shadow-md focus:outline-none focus:border-indigo-500"
                                placeholder="20000"
                                // onChange={(e)=>setFormData({...formData,nom_fournisseur: e.target.value})}
                                required
                            />
                        </div>

                        <div className="mt-4 mb-3">
                            <label
                                htmlFor="nom_fournisseur"
                                className="block text-gray-600 text-sm font-medium mb-2"
                            >

                            </label>
                            <select name="idservice"  className="border-0 shadow-md w-full mt-2 px-3   py-3 placeholder-blueGray-300 text-blueGray-600"
                                    // onChange={(e)=>
                                    //     setIdFournisseur(e.target.value)
                                    // }
                            >
                                <option value="" className="placeholder-blueGray-300">choisir un fournisseur</option>
                                {fournisseur?.map((fo,index) =>(
                                    <option key={index} value={fo.id}>{fo.nom_fournisseur}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4 mb-3">
                            <label
                                htmlFor="nom_fournisseur"
                                className="block text-gray-600 text-sm font-medium mb-2"
                            >
                                Prix Hors Taxe
                            </label>
                            <input
                                type="number"
                                name="prixHt"
                                className="w-full px-3 py-2  pb-4 rounded border-0 shadow-md focus:outline-none focus:border-indigo-500"
                                placeholder="20000"
                                // onChange={(e)=>setFormData({...formData,nom_fournisseur: e.target.value})}
                                required
                            />
                        </div>

                        <div className="mb-4 mb-3">
                            <label
                                htmlFor="nom_fournisseur"
                                className="block text-gray-600 text-sm font-medium mb-2"
                            >
                                Prix Hors Taxe
                            </label>
                            <input
                                type="number"
                                name="prixTTC"
                                className="w-full px-3 py-2 pb-4 rounded border-0 shadow-md focus:outline-none focus:border-indigo-500"
                                placeholder="2500"
                                // onChange={(e)=>setFormData({...formData,nom_fournisseur: e.target.value})}
                                required
                            />
                        </div>


                        {/*form id Bons de commande */}
                        <div className="rounded-t  mb-3 mt-3 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3
                                        className={
                                            "font-semibold text-lg " +
                                            (color === "light" ? "text-blueGray-700" : "text-white")
                                        }
                                    >
                                        Bons de commande
                                    </h3>
                                </div>


                            </div>
                        </div>

                    {/*    some things */}

                        <div className="rounded-t mb-3 mt-3 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3
                                        className={
                                            "font-semibold text-lg " +
                                            (color === "light" ? "text-blueGray-700" : "text-white")
                                        }
                                    >
                                        liste des produits reçus
                                    </h3>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="rounded-t  mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <button
                                className=" bg-lightBlue-500 text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // onClick={handleValidation}
                            >
                                Valider
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}