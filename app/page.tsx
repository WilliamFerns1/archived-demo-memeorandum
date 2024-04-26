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
          className="bg-[orangered] p-2 rounded-md flex items-center justify-center lg:hidden"
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
      <section className="flex flex-col justify-center h-[80vh] items-center gap-4 leading-none">
        <p className="text-center w-3/5">
          Tired of all the negative news? Everywhere you go, people are
          stressed out, and unhappy. It doesn't have to be that way.
          HappyPositiveNews is a media platform where you can spend a small
          amount of time each day, reading positive news and stories, around
          various categories, to light up your day.
        </p>
        <button className="btn-primary">Start today</button>
      </section>
    </main>
  );
}

