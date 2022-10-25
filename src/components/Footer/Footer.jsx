import React from "react";
import "font-awesome/css/font-awesome.min.css";

function Footer(props) {
  return (
    <>
      <footer className="absolute bottom-0 bg-opacity-30 p-5 bg-gray-100 w-full	flex justify-center ">
        <div>
          <div className="flex justify-between p-1">
            <span>
              <i className="fa fa-brands fa-facebook-f"></i>
            </span>
            <span>
              <i className="fa fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa fa-brands fa-pinterest-p"></i>
            </span>
            <span>
              <i className="fa fa-brands fa-instagram"></i>
            </span>
          </div>
          <div className="text-sm text-gray-300"> &copy; with love be moha</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
