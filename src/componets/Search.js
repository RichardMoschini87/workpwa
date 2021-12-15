import React, { useEffect } from "react";
import './Search.css'
import { useSelector, useDispatch } from "react-redux";


function Search() {
    const obj = useSelector(state => state.objReducer)



    return (<div>
        <h2>Componente di ricerca per : {obj.nome + ' ' + obj.cognome} </h2>
    </div>
    )
}

export default Search