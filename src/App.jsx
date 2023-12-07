import { useState } from "react";
import reactLogo from "./assets/logo.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home";
import ShowRecipes from "./pages/showRecipes";
import "./App.css";
import BrowseRecipe from "./pages/browseRecipe";
import Contact from "./pages/contact";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

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
            <div className="sm:hidden flex justify-end  dark:bg-slate-800 m-5 right-0">
              <button className="" onClick={handleToggle}>
                {isMobile ? <FiX size={25} /> : <GiHamburgerMenu size={25} />}
              </button>
            </div>
            <div
              className={`sm:flex ${
                isMobile ? "fixed right-0 bg-white" : "hidden"
              }`}
            >
              <ul className="justify-center sm:flex m-7 ">
                <li>
                  <NavLink
                    to="/"
                    title="Home"
                    style={({ isActive }) => {
                      return { color: isActive ? "orange" : "black" };
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/recipes"
                    className="px-10"
                    style={({ isActive }) => {
                      return { color: isActive ? "orange" : "black" };
                    }}
                  >
                    Browse Recipes
                  </NavLink>
                </li>
                {/* <li>
                <Link to="/test" className="px-10">
                  Blog
                </Link>
              </li> */}
                <li>
                  <NavLink
                    to="/contact"
                    className="px-10"
                    style={({ isActive }) => {
                      return { color: isActive ? "orange" : "black" };
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
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
