import React from "react";
import { useState } from "react"; // import state
import { Link } from "react-router-dom";

import "./Header.css";
function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const userName = localStorage.getItem("userEmail");
  return (
    <>
      <div className="navBG p-6">
        <div className=" max-w-5xl m-auto">
          <div className="flex justify-center">
            <div className="flex-col text-center font-serif p-4">
              <div className="text-4xl p-3">All Images</div>
              <div className="tracking-wider ">PHOTOGRAPHY</div>
            </div>
          </div>
          {/*  MOBILE-MENU */}
          <section className=" flex lg:hidden justify-end ">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {" "}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">Pregnancy</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/portfolio">Babies</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Family</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Bio</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Book Session</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  {!userName ? <Link to="/login">Log In</Link> : userName}
                </li>
              </ul>
            </div>
          </section>

          <div className="justify-around italic font-hairline font-serif hidden lg:flex">
            <div>Pregnancy</div>
            <div>Babies</div>
            <div>Family</div>
            <div>Bio</div>
            <div>Book Session</div>
            <div>{!userName ? <Link to="/login">Log In</Link> : userName}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
