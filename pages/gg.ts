import { useState, useEffect } from "react";
import reactLogo from "./assets/logo.jpg";
import foodimg from "./assets/foodImg.jpg";
import foodimg2 from "./assets/jollofRice.jpeg";
import "./App.css";

// https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
function App() {
  const [recipes, setRecipes] = useState([]);
  //   const url = "https://api.spoonacular.com/recipes/716429/information?apiKey=0cdbe3234d304a6da93fbc36ffecba26&includeNutrition=true"
  //   fetch(url, {
  //    headers: {
  //     "Content-Type" : "application/json"
  //   }
  // })
  //   .then((res) => (res.json()))
  //   .then((data) => (
  //     console.log(data)
  //   ))
  //   .catch((error) => {
  //     console.error("Error", error)
  //   })

  //   fetch("https://api.spoonacular.com/recipes/715538/information?apiKey=0cdbe3234d304a6da93fbc36ffecba26&similar", {
  //     headers: {
  //      "Content-Type" : "application/json"
  //    }
  //  })
  //    .then((res) => (res.json()))
  //    .then((data) => (
  //      console.log(data)
  //    ))
  //    .catch((error) => {
  //      console.error("Error", error)
  //    })

  // const url =
  //   "https://api.spoonacular.com/recipes/random?apiKey=0cdbe3234d304a6da93fbc36ffecba26&number=1&tags=vegetarian";
  // fetch(url, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => {
  //     console.error("Error", error);
  //   });
  // const url =
  //   "https://api.spoonacular.com/recipes/informationBulk?apiKey=0cdbe3234d304a6da93fbc36ffecba26&ids=715538,716429";
  // fetch(url, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => {
  //     console.error("Error", error);
  //   });
  // const getRecipes = () => {
  //   const url =
  //     "https://api.spoonacular.com/recipes/informationBulk?apiKey=0cdbe3234d304a6da93fbc36ffecba26&ids=715538,716429";
  //   fetch(url, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setRecipes(data))
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // };
  //const getRecipes = () => {
  //   const url =
  //     "https://api.spoonacular.com/recipes/informationBulk?apiKey=0cdbe3234d304a6da93fbc36ffecba26&ids=715538,716429";
  //   fetch(url, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setRecipes(data))
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // };
  // const submit = (e) => {
  //   e.preventDefault();
  //   const searchRecipes = (input) => {
  //     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cdbe3234d304a6da93fbc36ffecba26&query=${input}&maxFat=25&number=2`;
  //     const urls = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cdbe3234d304a6da93fbc36ffecba26&query=${input}`;
  //     const url2 =
  //       "https://api.spoonacular.com/recipes/informationBulk?apiKey=0cdbe3234d304a6da93fbc36ffecba26&ids=715538,716429";
  //     fetch(url, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setRecipes(data));
  //     console.log(data).catch((error) => {
  //       console.error("Error", error);
  //     });
  //   };
  // };
  const submit = (e) => {
    e.preventDefault();
    console.log("got here from");
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
          setRecipes(data);
          console.log(data);
          console.log("got here");
        })
        .catch((error) => {
          console.error("Error", error);
        });
    };

    // Call the searchRecipes function with your input value
    const input = "pasta"; // Replace with your actual input value
    searchRecipes(input);
  };

  // const searchMovie = (input) => {
  //   let queryURL;
  //   if (!input) {
  //     return alert("Please enter a movie name");
  //   } else {
  //     url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=0cdbe3234d304a6da93fbc36ffecba26&query=${input}&maxFat=25&number=2`;
  //     // queryURL = `https://api.themoviedb.org/3/search/movie?api_key=627
  //     //   45e918d0f5a9c&query=${input}&page=1`;
  //   }
  //   fetch(queryURL);

  //   let movieName;
  // if (!searchInputRef.current?.value) return;
  // movieName = searchInputRef.current.value;
  // const queryParams = `query=${movieName}&api_key=1234567890`;
  // const url = `${baseUrl}?${queryParams}`;
  // fetch(url)
  // .then((response) => response.json())
  // .then((data) => {
  //   setMoviesData(data.results);
  //   })
  //   .catch((err) => console.log(err));
  //   };
  //};
  // useEffect(() => {
  //   submit();
  // }, []);

  return (
    <>
      <div>
        <div className="flex justify-center py-8 border-b">
          <img src={reactLogo} className="w-16 h-12" />
          <div className="text-left">
            <h1 className="font-bold font-sans italic">Neerat </h1>
            <p>COOKING RECIPE</p>
          </div>
        </div>
        <nav>
          <ul className="justify-center flex m-8">
            <li>
              <a href="#" className="px-10">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="px-10">
                Browse Recipes
              </a>
            </li>
            <li>
              <a href="#" className="px-10">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="px-10">
                Contact
              </a>
            </li>
          </ul>
        </nav>
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
                <p className=" font-mono text-[#b5aeae] ">
                  Do you like cooking?
                </p>
                <div className="font font-bold text-5xl font-mono my-4">
                  <h2>The Neerat</h2>
                  <h2>Recipe Community</h2>
                </div>

                <div className="w-full mt-5">
                  <input
                    type="text"
                    name="input"
                    placeholder="Find a recipe...."
                    id="input"
                    className="p-2 rounded-tl-md rounded-bl-md w-9/12 text-black"
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
            <div className="">
              {recipes.map((recipe, index) => {
                return (
                  <div key={index} className="">
                    <p>{recipe.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
