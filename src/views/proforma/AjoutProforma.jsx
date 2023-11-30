import backendConfig from "../../config";
import {useHistory} from "react-router-dom";
import {useState} from "react";

export const AjoutProforma=()=>{
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
}