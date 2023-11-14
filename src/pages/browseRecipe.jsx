import React from "react";
import foodimg from "../assets/foodImg.jpg";
import Layouts from "../layouts";

const BrowseRecipe = () => {
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
      <form className="">
        <div className="bg-[] flex px-10 py-12">
          <select className="p-2 shadow-md focus:outline-none rounded-tl-md rounded-bl-md border focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
            <option selected>Sort</option>
            <option>Nutrients</option>
            <option>Ingredients</option>
          </select>
          <input
            type="text"
            className="placeholder:italic block w-full bg-white border border-slate-300 placeholder-slate-400 
            shadow-md focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 px-4 py-2"
            name=""
            placeholder="Search for recipe..."
            id=""
          />
          <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 rounded-br-md rounded-tr-md shadow-md p-2">
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
        </div>
      </form>
    </Layouts>
  );
};

export default BrowseRecipe;
