import React, { useEffect } from "react";
import PageNotFoundImg from "../assets/page-not-found.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="dark:text-white text-7xl font-bold">Oops!</p>
          <img src={PageNotFoundImg} alt="" />
        </div>
        <div className="flex justify-center mt-[5rem]">
          <Link to="/">
            <button className=" p-4 rounded-lg dark:text-white bg-gradient-to-r from-cyan-500 to-blue-500">
              Go back home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
