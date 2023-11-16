import React, { useState, useEffect } from "react";
import Layouts from "../layouts";
import { Link, useParams } from "react-router-dom";
import { TbClockHour9 } from "react-icons/tb";
import { RiMentalHealthFill } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import { WiMoonAltFull } from "react-icons/wi";
import foodimg from "../assets/foodImg.jpg";
import Home from "./home";

const ShowRecipes = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [similar, setSimilar] = useState([]);

  //Recipe Information
  const recipeInfo = () => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=0cdbe3234d304a6da93fbc36ffecba26&includeNutrition=false`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipeDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe details", error);
      });
  };
  useEffect(() => {
    recipeInfo();
  }, [recipeId]);

  //similar Recipes
  const similarRecipes = () => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=0cdbe3234d304a6da93fbc36ffecba26`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSimilar(data);
      });
  };
  useEffect(() => {
    similarRecipes();
  }, []);

  return (
    <Layouts>
      <div
        className="w-full flex bg-cover "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${foodimg})`,
          height: "45vh",
        }}
      >
        <div className="text-white font-semibold text-2xl sm:text-5xl font-mono my-auto mx-4 text-left">
          <h2>Browse Recipes </h2>
        </div>
      </div>
      <div className="m-8 flex">
        <div className="">
          {recipeDetails ? (
            <div>
              <div className="bg-[#f4f3f0] rounded-md w-4/6 p-4 sm:flex justify-between ">
                <div className="flex">
                  <GiKnifeFork className="text-[#72716e] m-2" size={30} />
                  <div className="pb-6 text-sm ">
                    <p>
                      <strong>YIELDS</strong>
                    </p>
                    <p className="text-[#72716e]">
                      {recipeDetails.servings} Servings
                    </p>
                  </div>
                </div>
                <div className="sm:flex">
                  <div className="flex mr-4">
                    <TbClockHour9 className="text-[#72716e] m-2" size={30} />
                    <div className="pb-6 text-sm ">
                      <p>
                        <strong>READY TIME</strong>
                      </p>
                      <p className="text-[#72716e]">
                        <p>{recipeDetails.readyInMinutes} min</p>
                      </p>
                    </div>
                  </div>
                  <div className="flex mr-4">
                    <RiMentalHealthFill
                      className="text-[#72716e] m-2"
                      size={30}
                    />
                    <div className="pb-6 text-sm ">
                      <p>
                        <strong>HEALTH SCORE</strong>
                      </p>
                      <p className="text-[#72716e]">
                        <p>{recipeDetails.healthScore} </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="my-3 font-extrabold text-2xl">
                {recipeDetails.title}
              </h2>
              <img
                src={recipeDetails.image}
                alt=""
                className="w-4/6 rounded-md"
              />
              {/* <p>{recipeDetails.instructions}</p> */}

              <div className="w-4/6">
                {recipeDetails.analyzedInstructions.map(
                  (ingredientStep, index) => {
                    return (
                      <div key={index} className="">
                        {/* <p key={index}>{ingredient.name}</p> */}
                        {/* <p key={index}>{ingredient.cookingMinutes}</p> */}
                        <hr />
                        <h3 className="font-bold my-3 text-3xl">Dirctions</h3>
                        <div className="border border-b-2 border-[#372a2a]"></div>
                        {ingredientStep.steps.map((mainstep, index) => {
                          return (
                            <div className="">
                              <ul>
                                <li key={index} className="flex my-1">
                                  <WiMoonAltFull className="mt-" size={30} />
                                  {mainstep.step}
                                </li>
                              </ul>
                              {/* {mainstep.ingredients.map((ingredientNamme, index) => {
                            return (
                              <div className="">
                              <ul>
                               <li key={index}>{ingredientNamme.name}</li></ul>
                               
                              </div>
                            );
                          })} */}
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                )}
              </div>
              <p>
                {/* {recipeDetails.extendedIngredients.map((da, index) => {
                return (
                  <div className="">
                    <h1 key={index}>{da.consistency}</h1>
                    <h1 key={index}>{da.aisle}</h1>
                  </div>
                );
              })} */}
              </p>
            </div>
          ) : (
            <p>Loading recipe details...</p>
            //             <button type="button" class="bg-indigo-500 ..." disabled>
            //   <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24"><!-- ... --></svg>
            //   Processing...
            // </button>
          )}
        </div>
        <div className="bg-[#f4f3f0] rounded-md">
          <h1>Related Recipes</h1>
          {similar.map((similarRecipes, index) => {
            return (
              <Link key={index} href="/recipe/${similarRecipes.id}">
                <p>{similarRecipes.title}</p>
                <img src={similarRecipes.imageType} alt="" />
                <hr />
              </Link>
            );
          })}
        </div>
      </div>
    </Layouts>
  );
};

export default ShowRecipes;
