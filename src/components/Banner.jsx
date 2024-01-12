import React, { useState } from "react";

import { close, bulb } from "../assets";

const Banner = () => {
  const [hide, setHide] = useState(false);

  return (
    <div
      id="sticky-banner"
      tabindex="-1"
      className={`${
        hide ? "hidden" : "block"
      } absolute h-20 top-0 left-0 z-50 flex justify-between w-full p-4 bg-primary shadow-md`}
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 ">
          <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full ">
            <img
              src={bulb}
              alt="bulb"
              height={12}
              width={12}
              className="text-gray-500"
            />
            <span className="sr-only">Light bulb</span>
          </span>
          <span>
            Did you like this portfolio. Check out my{" "}
            <a
              href="https://www.sanidhy.me/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline font-medium text-blue-600 underline underline-offset-2 decoration-600 hover:no-underline"
            >
              new portfolio
            </a>
            .
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          data-dismiss-target="#sticky-banner"
          onClick={() => setHide(true)}
          type="button"
          className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-800 rounded-lg text-sm p-1.5 "
        >
          <img src={close} alt="close" height={12} width={12} />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;