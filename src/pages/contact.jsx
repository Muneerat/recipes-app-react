import React from "react";
import Layouts from "../layouts";
import foodimg from "../assets/foodImg.jpg";

const Contact = () => {
  return (
    <Layouts>
      <div
        data-aos="fade-up"
        className="w-full flex bg-cover "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${foodimg})`,
          height: "45vh",
        }}
      >
        <div className="text-white font-semibold text-2xl sm:text-5xl font-mono my-auto mx-4 text-left">
          <h2 data-aos="fade-up">Contact </h2>
        </div>
      </div>
    </Layouts>
  );
};

export default Contact;
