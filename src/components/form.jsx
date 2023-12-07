const Form = () => {
  return (
    <div className="flex justify-center m-auto text-center my-10">
      <div className="w-4/6">
        <p className="text-orange-500 py-3">Get in Touch Now</p>
        <h2 className="font-bold text-6xl">Write a Message</h2>
        <form className=" ">
          <div className="grid grid-cols-2 w-full text-[#7d7f82] p-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#f4f3f0]  focus:outline-none p-3 rounded-md m-4 "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#f4f3f0]  focus:outline-none p-3 rounded-md  m-4"
            />
            <input
              type="email"
              placeholder="Your Subject"
              className="bg-[#f4f3f0]  focus:outline-none p-3 rounded-md  m-4"
            />
            <input
              type="email"
              placeholder="Your Phone Number"
              className="bg-[#f4f3f0]  focus:outline-none p-3 rounded-md  m-4"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="98"
              rows="8"
              placeholder="Your Message"
              className="bg-[#f4f3f0]  focus:outline-none p-3 rounded-md  m-1 resize-none"
            ></textarea>
          </div>
          <button className="bg-orange-500 p-4 text-white rounded-md m-8">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
