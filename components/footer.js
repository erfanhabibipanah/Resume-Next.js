import React from "react";
import "./footer.module.css"


const Footer = () => {
    return (
        <div className="fixed relative left-0 bottom-0 w-full bg-gray-100">
            <div className="w-5 h-5 top-5 left-5 ">
                <img class="icon" src="/images/linkedin.svg" />
            </div>
            <div className="bg-gray-100  text-center container mx-auto px-6 pt-4 pb-6" >
                © Erfan Habibi Panah Fard . All rights reserved.
            </div>
        </div>
    )
}

export default Footer;