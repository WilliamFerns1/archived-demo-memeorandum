"use client";

import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  function toggleNavDropdown() {
    setIsNavDropdownOpen(!isNavDropdownOpen);
  }

  return (
    <main className="flex min-h-screen w-screen flex-col items-center">
      <header
        id="header"
        className="flex w-full justify-between items-center px-5 py-3 sm:px-7 md:px-10 lg:px-14 lg:py-4 relative"
      >
        <h1 className="semibold text-md sm:text-l lg:text-xl">
          HappyPositiveNews
        </h1>
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
      </header>
      <section className="flex flex-col justify-center h-[80vh] items-center px-2 py-3 sm:px-0 sm:py-0">
        <h1 className="text-3xl text-center bold text-yellow-400 lg:text-[3.5rem] sm:leading-none">Empower Your Day with Positivity</h1>
        <p className="text-center sm:w-3/5 w-4/5 mt-2 text-[12px]">
          {`${window.innerWidth > 800 ? "Seeking positivity in a negative world? " : ""}Discover HappyPositiveNews, where you can find uplifting stories in various categories to brighten your day.`}
        </p>
        <button className="btn-primary mt-4">Start today</button>
      </section>
    </main>
  );
}

