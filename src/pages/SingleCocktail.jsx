import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";


function SingleCocktail() {
  const { id } = useParams();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getCocktail(id);
  }, [id]);


  const getCocktail = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const { drinks } = await res.json();
      const {
        idDrink,
        strAlcoholic,
        strCategory,
        strDrink,
        strDrinkThumb: image,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
      } = drinks[0];

      const newObj = {
        idDrink,
        strAlcoholic,
        strCategory,
        strDrink,
        image,
        strGlass,
        strInstructions,
        ingredients: [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        ],
      };
      setData(newObj);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  console.log(data);

  if(loading) {
    return <Loading />
  }


  return (
  <section>
    <img src={data.image} alt={data.strGlass} />
  </section>
  );
}

export default SingleCocktail;

 