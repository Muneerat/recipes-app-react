import React, { useState, useEffect } from "react";
import Layouts from "../layouts";
import { useParams } from "react-router-dom";

const ShowRecipes = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState("");

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=0cdbe3234d304a6da93fbc36ffecba26&`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipeDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [recipeId]);
  return (
    <Layouts>
      <div>
        {/* <h2>{recipeDetails.tittle}</h2> */}
        {recipeDetails.extendedIngredients.map((ingredient, index) => (
          <h2 key={index} className="">
            {ingredient}
          </h2>
        ))}
      </div>
    </Layouts>
  );
};

export default ShowRecipes;
