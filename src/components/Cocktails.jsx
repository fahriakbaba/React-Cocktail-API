import React from "react";
import { useGlobalContext } from "../context/context";

function Cocktails() {
  const { items } = useGlobalContext();
  console.log(items);


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
                className="cocktails--image"
                src={strDrinkThumb}
                alt={strGlass}
              />
              <div className="cocktail--info">
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                <div className="cocktails--buttons">
                  <button>Details</button>
                  <button>Add Favourites</button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Cocktails;
