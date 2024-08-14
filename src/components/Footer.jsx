import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-dashed  border-t-4 border-orange-500  ">
      <div className="flex justify-evenly items-center  ">
        {/* BestEats logo */}
        <div className="p-5 hidden sm:block">
          <h1 className="text-4xl">
            Best<span className="font-bold text-orange-500">Eats</span>
          </h1>
          <p className="text-xl">The Best Food Delivered</p>
        </div>
        {/* Form */}
        <div className="p-10 m-1">
          <form className="flex flex-col  ">
            <label className="p-4 font-bold text-lg  flex flex-col">
              Name{" "}
              <input
                type="text"
                placeholder="Enter your name"
                className="m-1 rounded-xl p-2 border border-orange-500"
              />
            </label>
            <label className="p-4 font-bold text-lg  flex flex-col">
              Email{" "}
              <input
                type="email"
                placeholder="Enter your valid email"
                className="m-1 rounded-xl p-2 border border-orange-500"
              />
            </label>
            <label className="p-4 font-bold text-lg  flex flex-col">
              Any Queries or Suggestions{" "}
              <textarea
                name="Enter your Queries"
                className="m-1 rounded-xl p-2 border border-orange-500"
              ></textarea>
            </label>
            <button className="text-xl text-orange-500 font-bold text-center border border-orange-500 m-5 hover:text-white hover:bg-orange-500">
              Submit
            </button>
          </form>
        </div>
      </div>

      <p className="text-center font-bold p-2 text-lg">Copyright Reserved @BestEats</p>
    </div>
  );
};

export default Footer;
