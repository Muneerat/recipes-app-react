import reactLogo from "./assets/logo.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ShowRecipes from "./pages/showRecipes";
import "./App.css";
import Test from "./pages/test";

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
                <Link to="/recipes/recipesid" className="px-10">
                  Browse Recipes
                </Link>
              </li>
              <li>
                <Link to="/test" className="px-10">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="px-10">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/recipes" element={<ShowRecipes />} /> */}
            <Route path="/recipes/:id" element={<ShowRecipes />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
