import reactLogo from "./assets/logo.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import ShowRecipes from "../pages/showRecipes";
import "./App.css";

// https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
function App() {
  // useEffect(() => {
  //   submit();
  // }, []);

  return (
    <>
      <div>
        <div className="flex justify-center py-6 border-b">
          <img src={reactLogo} className="w-16 h-12" />
          <div className="text-left">
            <h1 className="font-bold font-sans italic">Neerat </h1>
            <p>COOKING RECIPE</p>
          </div>
        </div>
        <Router>
          <ul className="justify-center flex m-8">
            <li>
              <Link to="/" title="Home" className="px-10">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="px-10">
                Browse Recipes
              </Link>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<ShowRecipes />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
