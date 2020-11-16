import React from "react";
import Linkedin from "../../public/images/svg/linkedin.svg";
import GitHub from "../../public/images/svg/github.svg";
import footerStyle from "./footer.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-gray-100 z-1 border-t"
        style={{
          width: "100%",
          display: "inline-flex",
          flexFlow: "column nowrap",
        }}
      >
        <div
          class="flex pb-5 px-3 m-auto pt-5 text-gray-800 pt-8 mb-5 flex-col
      flex-row max-w-6xl text-center grid grid-cols-11 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-5"
        >
          <div class="text-center col-start-2 col-span-8">
            © Erfan Habibi Panah Fard. All Rights Reserved.
          </div>
          <div class={"flex col-end-12 col-span-2"}>
            <a
              rel="preconnect"
              href="https://www.linkedin.com/in/erfanhabibipanah"
              target="_blank"
              className={`w-6 mx-1 ${footerStyle.a}`}
            >
              <Linkedin />
            </a>
            <a
              rel="preconnect"
              href="https://github.com/erfanhabibipanah"
              target="_blank"
              className={`w-6 mx-1 ${footerStyle.a}`}
            >
              <GitHub />
            </a>
            <a
              rel="preconnect"
              href="https://twitter.com/e_habibipanah"
              target="_blank"
              className={`w-6 mx-1 ${footerStyle.a}`}
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
