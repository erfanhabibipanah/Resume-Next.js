import React from "react";
import Linkedin from "../../public/images/svg/linkedin.svg";
import GitHub from "../../public/images/svg/github.svg";
import footerStyle from "./footer.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-gray-100 z-1 border-t pb-5 px-3 m-auto pt-5 text-gray-800 pt-8 grid grid-column "
        style={{
          width: "100%",
          flexFlow: "column nowrap",
        }}
      >
        <div class="text-center ">
          © Erfan Habibi Panah Fard. All Rights Reserved.
        </div>
        <div class={" place-content-center py-5 -mb-3 flex"}>
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
            style={{ marginTop: "-2px" }}
          >
            <TwitterIcon style={{ color: "#00acee" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
