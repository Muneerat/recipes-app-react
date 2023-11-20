const ContactBox = ({ name }) => {
  return (
    <div className="rounded-md w- bg-orange-500 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-orange-500 py-5 px-2 my-4 text-center shandow-md ">
      {name}
    </div>
  );
};

export default ContactBox;
