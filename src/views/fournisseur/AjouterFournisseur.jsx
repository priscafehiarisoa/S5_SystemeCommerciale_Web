import React, {useState} from "react";
import backendConfig from "../../config";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const AjouterFournisseur = () => {
  const link = `http://${backendConfig.host}:${backendConfig.port}`;
  const history=useHistory();
  const [formData, setFormData] = useState({
    nom_fournisseur:'',
    nom_responsable:'',
    email:'',
    adresse:'',
    telephone:'',
    prix_livraison:'',
  });

  const resetFormdata=()=>{
    setFormData({
      nom_fournisseur:'',
      nom_responsable:'',
      email:'',
      adresse:'',
      telephone:'',
      prix_livraison:''
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(formData)
    try{
      const resp = await axios.post(link+"/fournisseur",formData)
      if(resp.status===200){
        history.push(`/fournisseur/list`);
      }
    }catch (e){
      console.log(e)
    }
  }


  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4">Ajout Fournisseur</h2>

        <form className="">
          <div class="mb-4">
            <label
              for="nom_fournisseur"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              Nom Fournisseur
            </label>
            <input
              type="text"
              id="nom_fournisseur"
              name="nom_fournisseur"
              class="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Apple"
              onChange={(e)=>setFormData({...formData,nom_fournisseur: e.target.value})}
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="nom_fournisseur"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              class="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="xxxx@gmail.com"
              onChange={(e)=>setFormData({...formData,email: e.target.value})}
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="nom_responsable"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              Nom du responsable
            </label>
            <input
              type="text"
              id="nom_responsable"
              name="nom_responsable"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Tim Cook"
              onChange={(e)=>setFormData({...formData,nom_responsable: e.target.value})}
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="Adresse"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              Adresse
            </label>
            <input
              type="text"
              id="Adresse"
              name="Adresse"
              class="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Silicon Valley,USA"
              onChange={(e)=>setFormData({...formData,adresse: e.target.value})}
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="telephone"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              Téléphone
            </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="0371234567"
              onChange={(e)=>setFormData({...formData,telephone: e.target.value})}
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="prix_livraison"
              class="block text-gray-600 text-sm font-medium mb-2"
            >
              Prix de Livraison
            </label>
            <input
              type="number"
              id="prix_livraison"
              name="prix_livraison"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="5000 Ariary"
              onChange={(e)=>setFormData({...formData,prix_livraison: e.target.value})}
              required
            />
          </div>


          <div>
            <button
              type="submit"
              class="w-full bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-4 py-2 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600"
              onClick={handleSubmit}
            >
              Ajouter Forunisseur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
