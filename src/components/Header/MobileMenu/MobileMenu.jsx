import React from "react";
import { Link } from "react-router-dom";

export default function MobileMenu(props) {
  return (
    <section data-testid="MobileMenu" className=" flex lg:hidden justify-end ">
      <div
        className="HAMBURGER-ICON space-y-2"
        onClick={() => props.setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
      >
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </div>

      <div className={props.isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        {" "}
        <div
          className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
          onClick={() => props.setIsNavOpen(false)} // change isNavOpen state to false to close the menu
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
            <a role="mobileChoises" href="/about">
              Pregnancy
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a role="mobileChoises" href="/portfolio">
              Babies
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a role="mobileChoises" href="/contact">
              Family
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a role="mobileChoises" href="/contact">
              Bio
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a role="mobileChoises" href="/contact">
              Book Session
            </a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            {!props.userName ? <Link to="/login">Log In</Link> : props.userName}
          </li>
        </ul>
      </div>
    </section>
  );
}
