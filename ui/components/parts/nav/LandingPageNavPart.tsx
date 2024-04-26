"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function LandingPageNavPart() {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  function toggleNavDropdown() {
    setIsNavDropdownOpen(!isNavDropdownOpen);
  }
  return (
    <>
      <div
        className="p-2 flex items-center justify-center lg:hidden"
        onClick={toggleNavDropdown}
      >
        {
          isNavDropdownOpen ? <IoClose size={20} fontWeight={"bold"} /> : <RxHamburgerMenu size={20} fontWeight={"bold"} />
        }
      </div>
      <nav
        className={`${isNavDropdownOpen || window.innerWidth > 1000 ? "flex" : "hidden"} absolute left-0 lg:static border-b-[1px] lg:border-none border-white flex items-center justify-center transition ease-in-out gap-4 w-full lg:w-auto`}
        style={{ top: "65px" }}
      >
        <a className="nav-link text-sm sm:text-md lg:text-l" href="/about">
          About
        </a>
        <a className="nav-link" href="/contact">
          Contact
        </a>
        <a className="nav-link" href="/home">
          Home
        </a>
      </nav>
      <div className="hidden lg:flex items-center gap-4">
        <a className="nav-link" href="/login">
          Login
        </a>
        <button className="btn-primary-small">Sign Up</button>
      </div>
    </>
  )
}
