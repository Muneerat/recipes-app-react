import { useState, useEffect } from "react";
import foodimg from "../assets/foodImg.jpg";
import Layouts from "../layouts";
import { Link } from "react-router-dom";

const BrowseRecipe = () => {
  const [search, setSearch] = useState([]);
  const [recipe, setRecipes] = useState("");
  const [filteredByN, setFilteredByN] = useState([]);

  const submit = (e) => {
    e.preventDefault();

    const browseRecipeFetch = (input) => {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cdbe3234d304a6da93fbc36ffecba26&query=${input}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setSearch(data.results);
        })
        .catch((error) => {
          console.log("Errorr", error);
        });
    };
    browseRecipeFetch(recipe);
    //  useEffect(() => {
    //     browseRecipeFetch(search);
    //   }, []);
  };
  const recipeInfo = () => {
    // const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=0cdbe3234d304a6da93fbc36ffecba26&includeNutrition=false`;
    const url = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=0cdbe3234d304a6da93fbc36ffecba26&minCarbs=10&maxCarbs=50&number=2`;
    //const url = ` https://api.spoonacular.com/recipes/findByNutrients?apiKey=0cdbe3234d304a6da93fbc36ffecba26`;
    //const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=0cdbe3234d304a6da93fbc36ffecba26&ingredients=apples,+flour,+sugar&number=2`;
    //const url =
    // ("https://api.spoonacular.com/recipes/informationBulk?apiKey=0cdbe3234d304a6da93fbc36ffecba26&ids=715538,716429");
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setFilteredByN(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe details", error);
      });
  };
  useEffect(() => {
    recipeInfo();
  }, []);

  return (
    <Layouts>
      <form className="" onSubmit={submit}>
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

        <div className="bg-[] flex px-10 py-12">
          <select className="p-2 shadow-md focus:outline-none rounded-tl-md rounded-bl-md border focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
            <option selected>Sort</option>
            {/* {filteredByN.map((option,index) =>  {
              return <option>{Nutrients}</option>;

            })} */}
            <option>Nutrients</option>
            <option>Ingredients</option>
          </select>
          <input
            type="text"
            className="placeholder:italic block w-full bg-white border border-slate-300 placeholder-slate-400 
            shadow-md focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 px-4 py-2"
            name="input"
            id="input"
            value={recipe}
            placeholder="Search for recipe..."
            onChange={(e) => setRecipes(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 rounded-br-md rounded-tr-md shadow-md p-2"
          >
            Search
          </button>
          {/* <label class="relative block">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label> */}
        </div>
        <div className="">
          <h3 className=" font-bold text-center  text-3xl p-4">All Recipes</h3>
          <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {search.map((recipe, index) => {
              return (
                <Link
                  to={`/recipes/${recipe.id}`}
                  key={index}
                  data-aos="fade-down"
                >
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

export default BrowseRecipe;
