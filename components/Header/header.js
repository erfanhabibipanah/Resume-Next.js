import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

const Header = ({ isActive }) => {
  const [isHome, setIsHome] = useState(false);
  const [isSites, setIsSites] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [show, setShow] = useState("hidden");

  const onclick = (name) => {
    setShow(name);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHome(true);
      setIsSites(false);
      setIsEducation(false);
      setIsContact(false);
    } else if (window.location.pathname === "/sites") {
      setIsHome(false);
      setIsSites(true);
      setIsEducation(false);
      setIsContact(false);
    } else if (window.location.pathname === "/education") {
      setIsHome(false);
      setIsSites(false);
      setIsEducation(true);
      setIsContact(false);
    } else if (window.location.pathname === "/contact-me") {
      setIsHome(false);
      setIsSites(false);
      setIsEducation(false);
      setIsContact(true);
    }
  }, []);

  return (
    <div className="relative z-1 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-gray-100">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a className="flex">
              <a
                rel="preconnect"
                href="https://www.linkedin.com/in/erfanhabibipanah"
                target="_blank"
              >
                <img
                  src="/images/profile/profile.webp"
                  className={`cursor-pointer h-6 w-auto sm:h-6 ${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt="Erfan's img"
                />
              </a>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => {
                onclick("");
                isActive(false);
              }}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <Link href="/">
                <button
                  type="button"
                  className={`${
                    isHome ? "text-gray-900" : "text-gray-500"
                  } group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 active:text-gray-900 transition ease-in-out duration-150`}
                >
                  <span>About Me</span>
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link href="/projects">
                <button
                  type="button"
                  className={`${
                    isSites ? "text-gray-900" : "text-gray-500"
                  } group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 active:text-gray-900 transition ease-in-out duration-150`}
                >
                  <span>Projects</span>
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link href="/education">
                <button
                  type="button"
                  className={`${
                    isEducation ? "text-gray-900" : "text-gray-500"
                  } group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 active:text-gray-900 transition ease-in-out duration-150`}
                >
                  <span>Education</span>
                </button>
              </Link>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <Link href="/contact-me">
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className={`${
                    isContact ? "text-gray-900 bg-gray-700" : "bg-gray-700"
                  } whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-gray-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`}
                >
                  Contact Me
                </button>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${show} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-6 bg-gray-100">
              <div className="flex items-center justify-between">
                <a className="flex">
                  <a
                    rel="preconnect"
                    href="https://www.linkedin.com/in/erfanhabibipanah"
                    target="_blank"
                  >
                    <img
                      src="/images/profile/profile.webp"
                      className={`cursor-pointer h-8 w-auto ${styles.headerSImage} ${utilStyles.borderCircle}`}
                      alt="Erfan's img"
                    />
                  </a>
                </a>
                <div className="-mr-2">
                  <button
                    onClick={() => {
                      onclick("hidden");
                      isActive(true);
                    }}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 bg-gray-100">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/">
                  <button
                    type="button"
                    className={`${
                      isHome ? "text-gray-900" : "text-gray-500"
                    } text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150`}
                  >
                    <span>About Me</span>
                  </button>
                </Link>
                <Link href="/projects">
                  <button
                    type="button"
                    className={`${
                      isSites ? "text-gray-900" : "text-gray-500"
                    } text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150`}
                  >
                    <span>Projects</span>
                  </button>
                </Link>
                <Link href="/education">
                  <button
                    type="button"
                    className={`${
                      isEducation ? "text-gray-900" : "text-gray-500"
                    } text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150`}
                  >
                    <span>Education</span>
                  </button>
                </Link>
              </div>
              <div className="space-y-6">
                <Link href="/contact-me">
                  <span className="w-full flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className={`${
                        isContact ? "text-gray-900 bg-gray-700" : "bg-gray-700"
                      } w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-gray-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`}
                    >
                      Contact Me
                    </button>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
