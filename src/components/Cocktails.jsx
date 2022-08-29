import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import Loading from "../components/Loading";

function Cocktails() {
  const { items, isLoading } = useGlobalContext();
  console.log(items);

  if (isLoading) {
    return <Loading />;
  }

  if (items !== null) {
    return (
      <main>
        <h2 className="cocktails--title">Cocktails</h2>
        <section className="cocktails--section">
          {items.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } =
              item;

            return (
              <div className="cocktail" key={idDrink}>
                <img
                  className="cocktail--image"
                  src={strDrinkThumb}
                  alt={strGlass}
                />
                <div className="cocktail--info">
                  <h3>{strDrink}</h3>
                  <h4>{strGlass}</h4>
                  <p>{strAlcoholic}</p>
                  <div className="cocktail--buttons">
                    <button className="btn btn-details">
                      <Link
                        to={`cocktail/${idDrink}`}
                        className="cocktail--link"
                      >
                        Details
                      </Link>
                    </button>
                    <button className="btn btn-add">
                      <MdOutlineFavoriteBorder className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    );
  }
  return <h2 className="cocktail--error">There is no cocktail to show.</h2>;
}

export default Cocktails;
