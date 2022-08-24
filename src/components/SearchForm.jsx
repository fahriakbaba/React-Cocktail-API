import React from "react";
import { useGlobalContext } from "../context/context";


function SearchForm() {
    const value = useGlobalContext();
    console.log(value);
    return(
        <div>
            searchform
        </div>
    )
}

export default SearchForm;