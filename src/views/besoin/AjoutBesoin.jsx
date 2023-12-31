import React, { useEffect, useState ,} from "react";
import backendConfig from "config";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const AjoutBesoin = ({ color }) => {
  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
  const history = useHistory();
  color = "light";
  const [articles, setArticles] = useState(
    // []
    {
    "service": {
      "id": 1
    },
    "etat": 0,
    "motif": "",
    "besoinProduits": []
  }
  )

  const selects =()=>{
    if(user.idservice === -1){
      return (
          <>
            <label htmlFor="te"> services </label>
            <select name="idservice" id="te" className="border-0 mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e)=>setArticles({...articles, service:{id: e.target.value}})} >
              {listesServices?.map((service,index) =>(
                  <option key={index} value={service.id}>{service.nomService}</option>
              ))}
            </select>
          </>
      )
    }

  }


    const [selectedArticles, setSelectedArticles] = useState([]);
    const [services, setservices] = useState([])
    const [listesServices, setlistesServices] = useState([])
    const [produits, setproduits] = useState([])
    const link = `http://${backendConfig.host}:${backendConfig.port}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(link+"/produit");
        const response2 = await axios.get(link+"/service");
        setproduits(response.data);
        setservices(response2.data);
        console.log("hurray "+JSON.stringify(services))
        if(user.idservice!==-1){
            setlistesServices(services.filter(s=>s.id===user.idservice))
          for (let i = 0; i < listesServices; i++) {
            setArticles({...articles, service: {id:user.idservice}})
          }
        }
        else{
          setlistesServices(services)
        }
        // Handle the response data
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchData();
  }, [link]);

  console.log("huhu "+services)
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
    // var newversion= {
    //     quantite:quantite,
    //     produit:{
    //         id:id,
    //     }
    // }
    // oldBesoin.push(newversion);

    const existingIndex = oldBesoin.findIndex(item => item.produit.id === id);

    if (existingIndex !== -1) {
      // If the id exists, update the quantite value
      oldBesoin[existingIndex].quantite = quantite;
    } else {
      // If the id doesn't exist, add a new entry
      const newVersion = {
        quantite: quantite,
        produit: {
          id: id,
        }
      };
      oldBesoin.push(newVersion);
    }
    setArticles({...articles, besoinProduits:oldBesoin})


  };



  const handleMotifChange = (motif) => {
    // Update the motif in the main articles state
    setArticles({
      ...articles,
      motif,
    });
  };

  const handleValidation = async () => {
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
    const resp = await axios.post(link+"/besoin",articles)
    if(resp.status===200){
      history.push(`/besoin/list`);
    }
  };


console.log("article"+JSON.stringify(articles))
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
                  Formulation des besoins
                </h3>
              </div>
              <div className="mt-4">
                {user.idservice!==-1 &&
                listesServices?.map((service,index) =>(
                    <p >service : {service.nomService}</p>
                ))}

              </div>
              &nbsp; &nbsp;
              <div className="mt-4 w-full">
                <label htmlFor="motif"
                       className="border-t-0  align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center"
                >Motif de la demande</label>
              <input
                        type="text"
                        name="motif"
                        className="border-0 mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="motif"
                        placeholder="Motif"
                        required={true}
                        onChange={(e) =>
                            handleMotifChange( e.target.value)
                          }
                      />
              </div>
              <div className="mt-4 w-full">
                {selects()}
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <div className="max-h-3 overflow-y-auto">
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

