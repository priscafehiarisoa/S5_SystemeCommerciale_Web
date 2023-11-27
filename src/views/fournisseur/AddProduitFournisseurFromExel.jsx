import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import backendConfig from "../../config";
import axios from "axios";
import {Alert} from "@material-tailwind/react";
import {red} from "tailwindcss/colors";
// import { Alert } from "@material-tailwind/react";

export const AddProduitFournisseurFromExel =({color})=>{
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    const history = useHistory();
    color = "light";
    const [fileName, setFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [fournisseur, setFournisseur]=useState([])
    const [idFournisseur,setIdFournisseur]=useState()
    const formData=new FormData();
    const link = `http://${backendConfig.host}:${backendConfig.port}`;

    useEffect(()=>{
        const fetchdata=async ()=>{
            try{
                const resp = await axios.get(link+"/fournisseur")
                setFournisseur(resp.data)
            }catch (e) {
                console.log(e)
            }
        }
        fetchdata()
    },[link])

    const handleFileChange = (event) => {
        const fileInput = event.target;
        if (fileInput.files.length > 0) {
            const name = fileInput.files[0].name;
            setFileName(name);
            const file = fileInput.files[0];
            setSelectedFile(file);
        }
    };


    const handleValidation =async()=> {
        try{

            if (selectedFile) {
                console.log('File:', selectedFile);
                formData.append("file",selectedFile)
                formData.append("fournisseur",idFournisseur)
                const resp= axios.post(link+"/produitFournisseur/upload",formData)

            } else {
                console.log('No file selected');
            }
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <>
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
                                    Ajouter un proformat par fournisseur
                                </h3>
                            </div>


                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto px-12 ">



                        <div className="mt-4">
                            <select name="idservice"  className="border-0 shadow-md w-full mt-2 px-3   py-3 placeholder-blueGray-300 text-blueGray-600"
                                    onChange={(e)=>
                                        setIdFournisseur(e.target.value)
                                        } >
                                <option value="" className="placeholder-blueGray-300">choisir un fournisseur</option>
                                {fournisseur.map(fo =>(
                                    <option value={fo.id}>{fo.nom_fournisseur}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center justify-center w-80 h-80">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center mt-12 mb-12 justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center w-50 pt-5 pb-6 mt-12 mb-12">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">xlsx files only</p>
                                    <p className="text-2xl text-lightBlue-500 dark:text-blueGray-600" color="primary">{fileName}</p>

                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                            </label>
                        </div>

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