import JsPDF from 'jspdf';
import React, { useEffect, useState } from "react";
import { BonDachat } from './BonDachat';
import backendConfig from "config";
import axios from "axios";
import { useParams } from 'react-router-dom';

export const Proforma = () => {
  const [listFournisseur, setlistFournisseur] = useState([]);
  const link = `http://${backendConfig.host}:${backendConfig.port}`;
  let {idbesoin}=useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(link+"/besoin/getBesoin/"+idbesoin);
          console.log(link+"/besoin/getBesoin/"+idbesoin)
          console.log(response.data);
          setlistFournisseur(response.data);
          console.log(listFournisseur);
        // Handle the response data
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchData();
  }, []);

  const proformas = [
    {
      idFournisseur: 1,
      nomFournisseur: "Apple",
      delai: "20jrs",
      articles: [
        {
          designation: "P1",
          quantite: "100 unités",
          prixHorsTaxe: "220000 Ariary",
          taxe: "5%",
          prixTTC: "44000 Ariary",
        },
        {
          designation: "P2",
          quantite: "50 unités",
          prixHorsTaxe: "150000 Ariary",
          taxe: "3%",
          prixTTC: "154500 Ariary",
        },
      ],
    },
    {
      idFournisseur: 2,
      nomFournisseur: "Samsung",
      delai: "5jrs",
      articles: [
        {
          designation: "S1",
          quantite: "200 unités",
          prixHorsTaxe: "180000 Ariary",
          taxe: "4%",
          prixTTC: "187200 Ariary",
        },
        {
          designation: "S2",
          quantite: "75 unités",
          prixHorsTaxe: "120000 Ariary",
          taxe: "2%",
          prixTTC: "122400 Ariary",
        },
      ],
    },
    // Add more proformas as needed
  ];

  const generatePDF = (id_bonsDeCommande) => {

      const report = new JsPDF('portrait','pt','a3');
      report.html(document.getElementById(`bon${id_bonsDeCommande}`)).then(() => {
          report.save(`bon${id_bonsDeCommande}.pdf`);
        console.log(`bon${id_bonsDeCommande}.pdf`)
      });
}
  return (
    <div>
      <div className="w-full lg:w-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center" id='report'>
              {/* <h2 className=" mt-3 text-3xl font-semibold text-center mb-4">Pro Forma</h2> */}
              <hr />
                {listFournisseur.map((fournisseur) => (
              <div>
                    <div id={`bon${fournisseur.id_bonsDeCommande}`} className='mt-5 px-6 w-72'>
                        <h2 className=" mt-3 text-xl font-semibold text-center">Bon de commande, numéro: {`${fournisseur.id_bonsDeCommande}`}</h2>
                        <BonDachat fournisseur={fournisseur}/>
                    </div>

                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          {fournisseur.besoin.etat===20 && <button
                              className="font-normal text-lightBlue-500"
                              onClick={()=>generatePDF(fournisseur.id_bonsDeCommande)}
                          >
                            Exporter en PDF
                          </button> }
                        </div>
                      </div>
                    </div>
                </div>
                  ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
