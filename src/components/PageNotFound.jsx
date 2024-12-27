import React from "react";
import pgntfnd from "../assets/imageedit_1_9273372713.png";
const PageNotFound = () => {
  return (
    <div className="min-h-100">
      <div className="ms-3 me-3 justify-content-center align-items-center text-center">
        <img
          src={pgntfnd}
          alt="Page Not Found"
          className="img-fluid w-44 mt-5"
        />
        <h2 className="custom-page-notfound fw-bold">
          We&#39;re Working on It.
        </h2>
        <a href="/">
          <button type="button" class="btn btn-primary">
            Back
          </button>
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
