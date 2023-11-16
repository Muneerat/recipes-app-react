import reactLogo from "./assets/logo.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ShowRecipes from "./pages/showRecipes";
import "./App.css";
import Test from "./pages/test";
import BrowseRecipe from "./pages/browseRecipe";
import Contact from "./pages/contact";

// https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
const App = () => {
  // useEffect(() => {
  //   submit();
  // }, []);

  return (
    <>
      <div className="">
        <Router>
          <div className="">
            <div className="flex justify-center py-6 border-b ">
              <img src={reactLogo} className="w-16 h-12" />
              <div className="text-left">
                <h1 className="font-bold font-sans italic">Neerat </h1>
                <p>COOKING RECIPE</p>
              </div>
            </div>
            <ul className="justify-center flex m-8 ">
              <li>
                <Link to="/" title="Home" className="px-10 text-red-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="px-10">
                  Browse Recipes
                </Link>
              </li>
              {/* <li>
                <Link to="/test" className="px-10">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="px-10">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/recipes" element={<BrowseRecipe />} />
            <Route path="/recipes/:recipeId" element={<ShowRecipes />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
