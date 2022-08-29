import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

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

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="single-cocktail-container">
      <div className="single-cocktail-image">
        <img src={data.image} alt={data.strGlass} />
      </div>
      <div className="single-cocktail-info">
        <button className="btn btn-details">
          <Link to={"/"} className="cocktail--link">Back Home</Link>
        </button>
        <h4>
          <span>Name:</span> <span>{data.strDrink}</span>
        </h4>
        <h4>
          <span>Category:</span> <span>{data.strCategory}</span>
        </h4>
        <h4>
          <span>Info:</span> <span>{data.strAlcoholic}</span>
        </h4>
        <h4>
          <span>Glass:</span> <span>{data.strGlass}</span>
        </h4>
        <h4>
          <span>Instructons:</span> <span>{data.strInstructions}</span>
        </h4>
        <h4>
          <span>Ingredients:</span>{" "}
          <span>{data.ingredients.map((item) => " " + item + " ")}</span>{" "}
        </h4>
      </div>
    </section>
  );
}

export default SingleCocktail;
