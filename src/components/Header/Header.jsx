import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Links from "./Links";
import OpenCloseBtn from "./OpenCloseBtn";
import { useHOWContext } from "../context/useContext";

const Header = () => {
  const { toggle, setToggle, isDonationClick,setIsDonationClick } = useHOWContext();

  return (
    <div className="dark:bg-gray-900 absolute top-0 z-50 w-full dark:border-gray-700 bg-transparent md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-5 dark:bg-gray-900 dark:text-white leading-3">
        <Link to="/" className="flex flex-col items-center">
          <span className="text-3xl font-bold text-red-500 tracking-widest bg-gradient-to-r from-red-500 via-white to-red-400 text-transparent bg-clip-text inline-block">
            HOW
          </span>

          <span className=" text-[11px] font-semibold dark:text-gray-300 text-gray-300">
            House of wisdom
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-5 md:gap-12">
          <Links path="/" name="HOW" />
          <Links path="about" name="About" />
          <Links path="vison" name="Vision" />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-base ">
            <span className="text-2xl text-white cursor-pointer">
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <Link
              className={`p-3 py-2 rounded-md bg-red-400 text-white cursor-pointer font-semibold`}
              onClick={()=>setIsDonationClick(true)}
            >
              Donation
            </Link>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-3">
          <span className="text-xl text-white cursor-pointer">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <OpenCloseBtn
            toggle={toggle}
            setToggle={setToggle}
            className="text-white"
            icon={<ion-icon name="menu-outline"></ion-icon>}
          />
        </div>

        <div
          className={`${
            toggle ? "hidden" : "fixed"
          } transition-transform duration-200 inset-0 dark:bg-gray-900 dark:text-white bg-black/85 z-50 p-5`}
        >
          <div className="flex justify-between items-center">
            <Link to="/" className="flex flex-col items-center">
              <span className="text-3xl font-bold text-red-500 tracking-widest bg-gradient-to-r from-red-500 via-white to-red-400 text-transparent bg-clip-text inline-block">
                HOW
              </span>
              <span className="-mt-1 text-[11px] font-semibold dark:text-gray-300 text-gray-300">
                House of wisdom
              </span>
            </Link>
            <OpenCloseBtn
              toggle={toggle}
              setToggle={setToggle}
              icon={<ion-icon name="close-outline"></ion-icon>}
            />
          </div>
          <div>
            <div className="flex flex-col gap-6 items-start px-8 py-8">
              <Links
                path="/"
                name="Home"
                toggle={toggle}
                setToggle={setToggle}
              />
              <Links
                path="/about"
                name="About"
                toggle={toggle}
                setToggle={setToggle}
              />
              <Links
                path="/vison"
                name="Vison"
                toggle={toggle}
                setToggle={setToggle}
              />
            </div>

            <div className="flex items-center gap-3 text-base px-8 py-6 w-full border-t dark:border-gray-600 ">
              <Link
                className={`p-3 py-2 rounded-md bg-red-400 text-white cursor-pointer font-semibold`}
                onClick={()=>{
                  setIsDonationClick(true)
                  setToggle(!toggle)
                }}
              >
                Donation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
