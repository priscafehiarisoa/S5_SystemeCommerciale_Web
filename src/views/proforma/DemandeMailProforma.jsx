import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import backendConfig from "../../config";

export const DemandeMailProforma =({color})=>{
    color = "light";
    const history = useHistory();
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const link = `http://${backendConfig.host}:${backendConfig.port}`;

    const [formdata,setFormdata]=useState({
        fournisseur:[],
        produit:[],
    })
    const [fournisseur,setFournisseur]=useState([])
    const [produit,setProduit]=useState([])

    //catch datas
    useEffect(() => {
        const fetchData=async ()=>{
            try{
                const resFournisseur=await axios.get(link+"/fournisseur")
                const resProduit=await axios.get(link+"/produit")
                setFournisseur(resFournisseur.data)
                setProduit(resProduit.data)
            }catch (e) {
                console.log(e)
            }
        };
    fetchData()
    }, []);

    const handleValidation=async ()=>{
        try{
            const resp = await axios.post(link+"/besoin/sendEmail",formdata)
            history.push("/besoin/list")
        }catch (e){
            console.log(e)
        }
    }
    const handleFournisseurChange=(id,checked)=>{
        let fo=formdata.fournisseur
        const exists = fo.includes(id);
        if(checked){
            if(!exists){
                fo.push(id)
            }
        }
        else{
            fo=fo.filter(element => element !== id)
        }
        setFormdata({...formdata,fournisseur: fo})
    }

    function handleproduitChange(id, checked) {
        let po=formdata.produit
        const exists = po.includes(id);
        if(checked){
            if(!exists){
                po.push(id)
            }
        }
        else{
            po=po.filter(element => element !== id)
        }
        setFormdata({...formdata,produit: po})
    }



    console.log(JSON.stringify(formdata))
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
                                    Liste des articles
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto mb-8">
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
                                    Fournisseurs
                                </th>


                            </tr>
                            </thead>
                            <tbody>
                            {fournisseur.map((article) => (
                                <tr key={article.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                        <input
                                            type="checkbox"
                                            className=""
                                            name=""
                                            id=""
                                            onChange={(e) =>
                                                handleFournisseurChange(
                                                    article.id,
                                                    e.target.checked
                                                )

                                            }
                                        />
                                        <span
                                            className={
                                                "ml-3 font-bold " +
                                                (color === "light"
                                                    ? "text-blueGray-600"
                                                    : "text-white")
                                            }
                                        >
                        {article.nom_fournisseur}
                      </span>
                                    </th>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="block w-full overflow-x-auto mb-8">
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
                                    Article
                                </th>

                            </tr>
                            </thead>
                            <tbody>
                            {produit.map((article) => (
                                <tr key={article.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                        <input
                                            type="checkbox"
                                            className=""
                                            name=""
                                            id=""
                                            onChange={(e) =>
                                                handleproduitChange(
                                                    article.id,
                                                    e.target.checked
                                                )

                                            }
                                        />
                                        <span
                                            className={
                                                "ml-3 font-bold " +
                                                (color === "light"
                                                    ? "text-blueGray-600"
                                                    : "text-white")
                                            }
                                        >
                        {article.nomProduit}
                      </span>
                                    </th>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="rounded-t  mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <button
                                className=" bg-lightBlue-500 text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleValidation}
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