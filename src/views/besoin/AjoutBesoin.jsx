import React, { useEffect, useState } from "react";
import backendConfig from "config";
import axios from "axios";

export const AjoutBesoin = ({ color }) => {
  color = "light";
const [articles, setArticles] = useState(
    // []
    {
    "service": {
      "id": 1
    },
    "etat": 0,
    "motif": "besoin service 1 ",
    "besoinProduits": []
  }
  )

    const [selectedArticles, setSelectedArticles] = useState([]);
    const [produits, setproduits] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const link = `http://${backendConfig.host}:${backendConfig.port}/produit`;
        const response = await axios.get(link);

        setproduits(response.data);
        // Handle the response data
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (id, checked) => {
    setSelectedArticles((prevSelectedArticles) => {
      if (checked) {
        return [
          ...prevSelectedArticles,
          {
            id,
            quantite: 100, // You can set the initial quantity value as needed
            motif: "besoin service 1 ", // You can set the initial motif value as needed
          },
        ];
      } else {
        return prevSelectedArticles.filter((item) => item.id !== id);
      }
    });

  };

  const handleQuantiteChange = (id, quantite) => {
    var oldBesoin= articles.besoinProduits
    var newversion= {
        quantite:quantite,
        produit:{
            id:id,
        }
    }
    oldBesoin.push(newversion);
    setArticles({...articles, besoinProduits:oldBesoin})

    // setSelectedArticles((prevSelectedArticles) => {
    //   const updatedArticles = prevSelectedArticles.map((item) =>
    //   {
    //     //   item.id === id ? { ...item, quantite: parseInt(quantite) || 0 } : item;
    //     console.log(item.besoinProduits[0].produit.id);
    // }
    //   );
    //   console.log("Updated Articles:", updatedArticles);
    //   return updatedArticles;
    // });
    // console.log("Selected Articles:", selectedArticles);

  };

  const handleMotifChange = (motif) => {
    // Update the motif in the main articles state
    setArticles({
      ...articles,
      motif,
    });
  };

  const handleValidation = () => {
    // Merge the selected articles and quantities into the main articles state
    const updatedArticles = articles.besoinProduits.map((article) => {
      const selectedArticle = selectedArticles.find(
        (selected) => selected.id === article.produit.id
      );
      return selectedArticle || article;
    });

    setArticles({
      ...articles,
      besoinProduits: updatedArticles,
    });

    // Access the updated articles state
    console.log(articles);
    // You can perform further actions with the updated articles
  };


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
              <input
                        type="text"
                        name="motif"
                        className="border-0 mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="motif"
                        placeholder="Motif"
                        onChange={(e) =>
                            handleMotifChange( e.target.value)
                          }
                      />
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
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

                </tr>
              </thead>
              <tbody>
                {produits.map((article) => (
                  <tr key={article.id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <input
                        type="checkbox"
                        className=""
                        name=""
                        id=""
                        onChange={(e) =>
                          handleCheckboxChange(
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
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <input
                        type="number"
                        name="quantite"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id=""
                        placeholder="100"
                        onChange={(e) =>
                            handleQuantiteChange(article.id, e.target.value)
                          }
                      />
                    </td>

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
  );
};
