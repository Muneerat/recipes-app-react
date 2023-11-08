import React from "react";
import { useState, useEffect } from "react";
import foodimg from "../src/assets/foodImg.jpg";
// import Layouts from "../src/layouts";
import Layouts from "../src/layouts";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [inputs, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const searchRecipes = (input) => {
      const url2 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cdbe3234d304a6da93fbc36ffecba26&query=${input}&maxFat=25&number=2`;
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cdbe3234d304a6da93fbc36ffecba26&query=${input}`;
      const urld =
        "https://api.spoonacular.com/recipes/informationBulk?apiKey=0cdbe3234d304a6da93fbc36ffecba26&ids=715538,716429";
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data.results);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    };
    searchRecipes(inputs);
  };

  return (
    <Layouts>
      <form className="" onSubmit={submit}>
        <div>
          <div
            className="w-full h-screen flex items-center justify-center bg-cover bg-center text-center "
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${foodimg})`,
              height: "60vh",
            }}
          >
            <div className="text-[#fff]">
              <p className=" font-mono text-[#b5aeae] ">Do you like cooking?</p>
              <div className="font font-bold text-2xl sm:text-5xl font-mono my-4">
                <h2>The Neerat</h2>
                <h2>Recipe Community</h2>
              </div>

              <div className="w-full mt-5">
                <input
                  type="text"
                  name="input"
                  placeholder="Find a recipe...."
                  id="input"
                  value={inputs}
                  onChange={(e) => setInput(e.target.value)}
                  className="capitalize p-2 rounded-tl-md rounded-bl-md w-9/12 text-black"
                />
                <button
                  type="submit"
                  className="bg-black px-2 py-2 rounded-tr-md rounded-br-md border-none focus:outline-none hover:red"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* <img src={foodimg} className="" /> */}
          <h3 className="text-3xl text-center m-3 font-semibold capitalize ">
            {inputs} Recipes
          </h3>
          <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {recipes.map((recipe, index) => {
              return (
                <Link to="/recipes">
                  <div
                    key={index}
                    className="rounded-md shadow-md  border border-[#ebebeb]"
                  >
                    <img src={recipe.image} className="w-full" />
                    <p className=" font-mono text-[#2e2f31] text-center font-bold m-4">
                      {recipe.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </form>
    </Layouts>
  );
};

export default Home;
