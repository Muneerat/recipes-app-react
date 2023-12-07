import React from "react";
import Layouts from "../layouts";
import foodimg from "../assets/foodImg.jpg";
import Map from "../components/map";
import ContactBox from "../components/contactBox";
import Form from "../components/form";
import { Link } from "react-router-dom";

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
      <Map />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 m-8 ">
        <ContactBox boxname="435 Wandering Ct. Sausalito"  />
        <Link to="mailto:oladipomunirat@gmail.com">
        <ContactBox boxname="oladipomunirat@gmail.com" />
        </Link>
        <Link  to="tel:+2347069251084">
        <ContactBox boxname="666 888 0000" />
        </Link>
        
      </div>
      <Form />
    </Layouts>
  );
};

export default Contact;
