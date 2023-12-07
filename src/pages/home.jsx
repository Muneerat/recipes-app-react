import { useState } from "react";

import Foodimg from "../assets/foodImg.jpg";
import Layouts from "../layouts";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [inputs, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    const searchRecipes = (input) => {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cdbe3234d304a6da93fbc36ffecba26&query=${input}`;
      setLoading(true);

      fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(true);
          setRecipes(data.results);
        })
        .catch((error) => {
          console.log("Error", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    searchRecipes(inputs);
  };

  // const navigateToLatestRecipes = () =>{
  //   navigate("/latest")
  // }

  return (
    <Layouts>
      <form className="" onSubmit={submit}>
        <div>
          <div
            className="w-full h-screen flex items-center justify-center bg-cover bg-center text-center "
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Foodimg})`,
              height: "60vh",
            }}
          >
            <div className="text-[#fff]">
              <p className=" font-mono text-[#fefefe] ">Do you like cooking?</p>
              <div className="font font-bold text-2xl sm:text-5xl font-mono my-4">
                <h2>The Neerat</h2>
                <h2>Recipe Community</h2>
              </div>

              <div className="w-full mt-5 flex">
                <input
                  type="text"
                  name="input"
                  placeholder="Find a recipe...."
                  id="input"
                  value={inputs}
                  onChange={(e) => setInput(e.target.value)}
                  className="focus:outline-none capitalize p-2 rounded-tl-md rounded-bl-md w-9/12 text-black"
                />
                <button
                  type="submit"
                  className="bg-black px-2 py-2 rounded-tr-md rounded-br-md border-none focus:outline-none hover:bg-[#7f7c7c] flex gap-x- items-center disabled:cursor-not-allowed"
                  disabled={loading}

                >
                  {loading && (
                    <div className="w-6 h-6 rounded-full border-t border-r border-red-600 animate-spin "></div>
                  )}
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
          {/* <img src={ab} className="" /> */}
          <h3 className="text-3xl text-center m-3 font-semibold capitalize ">
          {recipes.length > 0 ? "Search Results" : "Latest Recipes"}
           
          </h3>
          <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {recipes.map((recipe, index) => {
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
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full"
                    />
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
