import React, {useState} from "react";

export const AjouterFournisseur = () => {

  const [formData, setFormData] = useState({
    nom_fournisseur:'',
    nom_responsable:'',
    Adresse:'',
    telephone:'',
    prix_livraison:'',
  });

  const handleInputChange = (e)=>{
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      // Otherwise, handle regular input changes
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    const formDataObject=new FormData();

    formDataObject.append("nom_fournisseur",formData.nom_fournisseur);
    formDataObject.append("nom_responsable",formData.nom_responsable);
    formDataObject.append("Adresse",formData.Adresse);
    formDataObject.append("telephone",formData.telephone);
    formDataObject.append("prix_livraison",formData.prix_livraison);
    console.log(formData);
    console.log(formDataObject);
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
