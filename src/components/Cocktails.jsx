import React from "react";
import { useGlobalContext } from "../context/context";

function Cocktails() {
    const { items } = useGlobalContext();
    console.log(items);

    return(
        <div>
            cocktails
        </div>
    )
}

export default Cocktails;