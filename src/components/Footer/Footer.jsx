import React from "react";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <>
      <footer
        data-testid="footer"
        className="fixed bottom-0 bg-opacity-30 p-5 bg-gray-100 w-full	flex justify-center "
      >
        <div>
          <div className="flex justify-between p-1">
            <span>
              <i role="footerIcon" className="fa fa-brands fa-facebook-f"></i>
            </span>
            <span>
              <i role="footerIcon" className="fa fa-brands fa-twitter"></i>
            </span>
            <span>
              <i role="footerIcon" className="fa fa-brands fa-pinterest-p"></i>
            </span>
            <span>
              <i role="footerIcon" className="fa fa-brands fa-instagram"></i>
            </span>
          </div>
          <div data-testid="copyRight" className="text-sm text-gray-300">
            {" "}
            &copy; with love be moha
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
