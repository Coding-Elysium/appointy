import React from "react";

const MainHeader = () => {
  return (
    <div className="flex flex-row text-textLight-color bg-secondary-color h-28 items-center justify-between px-28">
      <div className="flex flex-auto text-xl text-textLight-color font-semibold">
        Business Name
      </div>
      <div className="flex flex-auto justify-between items-center">
        <div className="flex justify-around items-center w-full mr-36">
          <button>Home</button>
          <button>About us</button>
          <button>Be our partner</button>
        </div>
        <button className="bg-textLight-color text-footer-color text-base font-semibold px-20 py-2 border rounded-md min-w-fit">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
