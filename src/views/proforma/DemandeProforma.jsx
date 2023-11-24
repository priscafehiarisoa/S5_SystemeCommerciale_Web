import React, { useState } from 'react'


export const DemandeProforma = () => {
  const [selectedArticles, setSelectedArticles] = useState([]);
    const handleInputChange= (e) =>{

    }

    const handleSubmit= (e) =>{

    }

    const articles=[
      {id:1,nomArticle:"Macbook M3"},
      {id:2,nomArticle:"Clavier sans fil"},
      {id:3,nomArticle:"Souris"},
      {id:4,nomArticle:"Papier Hygienique"},
    ];
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
  return (
    <div className="w-full lg:w-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4">Demande de Proforma</h2>

        <form className="">
        <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr><th></th></tr>
                </thead>
                <tbody>
                    {articles.map(article =>(
                  <tr>
                      <td>
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
                                "text-blueGray-600"
                              }
                            >
                              {article.nomArticle}
                            </span>
                      </td>
                  </tr>
                    ))}
                </tbody>
            </table>
        </div>

          <div className='mt-6'>
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
        </div>
    </div>
  )
}

