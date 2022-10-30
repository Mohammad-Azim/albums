import React from "react";
import { useState } from "react"; // import state
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";

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
          <MobileMenu
            setIsNavOpen={setIsNavOpen}
            isNavOpen={isNavOpen}
            userName={userName}
          />

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
