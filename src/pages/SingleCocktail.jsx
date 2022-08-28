import React from 'react';
import { useParams} from "react-router-dom";

function SingleCocktail() {
  const value = useParams();
  console.log(value);

  return (
    <div>SingleCocktail</div>
  )
}

export default SingleCocktail;