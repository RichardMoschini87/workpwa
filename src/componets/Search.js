import React from "react";
import './Search.css'
import objAct from "../reduxActions/ObjAction";
import oggettiReduce from "../reduxReducer/OggettiReduce";
import { useSelector } from "react-redux";


function Search() {

    const obj = useSelector(state => state.objReducer)

    return (<div><h2>Componente di ricerca per : {obj.nome + ' ' + obj.cognome} </h2></div>)
}

export default Search