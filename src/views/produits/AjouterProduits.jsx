import React, {useEffect, useState} from 'react'
import backendConfig from "../../config";
import {useHistory} from "react-router-dom";
import axios from "axios";

export const AjouterProduits = () => {
  const link = `http://${backendConfig.host}:${backendConfig.port}`;
  const history=useHistory();
  const [unite,setUnite]=useState([])
  const [formData, setFormData] = useState({
    nomProduit:'',
    unite:{
      id:""
    },

  });

  const resetFormdata=()=>{
    setFormData({
      nomProduit:'',
      unite:{
        id:""
      }
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(link+"/produit/unite");
        setUnite(response.data);
        // Handle the response data
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchData();
  }, [link]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(formData)
    try{
      const resp = await axios.post(link+"/produit",formData)
      resetFormdata()
      if(resp.status===200){
        history.push(`/fournisseur/produits/list`);
      }
    }catch (e){
      console.log(e)
    }
  }


  return (
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="bg-white p-8 rounded shadow-md w-96">
          <h2 class="text-2xl font-semibold mb-4">Ajout Produit</h2>

          <form className="">
            <div class="mb-4">
              <label
                  for="nom_fournisseur"
                  class="block text-gray-600 text-sm font-medium mb-2"
              >
                Nom produit
              </label>
              <input
                  type="text"
                  id="nom_produit"
                  name="nom produit"
                  class="border-0 mt-2 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="mac book air"
                  onChange={(e)=>setFormData({...formData,nomProduit: e.target.value})}
                  required
              />
            </div>

            <div class="mb-4">
              <label htmlFor="te"> unites de mesure </label>
              <select name="idservice" id="te" className="border-0 mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e)=>setFormData({...formData,unite: {id:e.target.value}})} >
                {unite?.map((service,index) =>(
                    <option key={index} value={service.id}>{service.nomUnite}</option>
                ))}
              </select>
            </div>



            <div>
              <button
                  type="submit"
                  class="w-full bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-4 py-2 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600"
                  onClick={handleSubmit}
              >
                Ajouter un produit
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

