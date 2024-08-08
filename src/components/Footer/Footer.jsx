import React from "react";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="w-full md:px-7 bg-gradient-to-r from-red-50 to-[#fce4c6]">
      <div className="px-8 md:px-0 w-full border-b dark:border-gray-700 dark:bg-gray-900  dark:text-white">
        <div className="max-w-7xl mx-auto py-8 md:gap-0 flex flex-col md:flex-row gap-8  items-center md:justify-between">
        <Link to="/" className="flex flex-col items-center">
        <img className="w-20 "src="/Group 14.svg" alt="" />
          <span className="text-[11px] font-semibold dark:text-gray-300 text-gray-700">House of wisdom</span>
        </Link>
          <div className="flex gap-16 items-center ">
            <ul>
              <li className="text-[14px] py-1 font-semibold dark:text-white text-gray-700">
                RESOURCES
              </li>
              <li className="underline text-gray-700">
              <Link to="/" >HOW</Link>
              </li>
              <li className="underline text-gray-700">
              <Link to="/about" >About</Link>
              </li>
              <li className="underline text-gray-700">
              <Link to="/vision" >Vision</Link>
              </li>
            </ul>
            <ul>
              <li className="text-[14px] py-1 font-semibold dark:text-white text-gray-700">
                FOLLOW US
              </li>
              <li>Github</li>
              <li>Discord</li>
            </ul>
            <ul>
              <li className="text-[14px] py-1 font-semibold dark:text-white text-gray-700">
                LEGAL
              </li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" dark:dark:text-white dark:bg-gray-900 md:py-10 px-8 md:px-0 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-0 pt-5 text-gray-600  pb-6">
        <p>Copyright &copy; 2024 | All Rights Reserved</p>
        <div className="flex items-center gap-5 justify-center text-balance text-gray-600 cursor-pointer text-xl">
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-discord"></ion-icon>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
