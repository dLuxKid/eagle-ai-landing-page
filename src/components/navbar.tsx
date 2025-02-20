"use client";

import logo_big from "@/assets/images/logo.png";
import { Cancel } from "@/assets/svg/cancel";
import Hamburger from "@/assets/svg/hamburger";
import Logo from "@/assets/svg/logo";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-[#131B2F] px-[5%] h-[76px] sm:h-[97px] w-full flex items-center justify-center">
      <div
        className={`w-full flex items-center justify-between gap-4 max-w-screen-3xl overflow-x-hidden z-50`}
      >
        <div className="sm:h-[35px] flex-shrink-0 sm:w-40 xl:w-[247px]">
          <Image
            src={logo_big}
            alt="logo"
            className="hidden sm:block size-full object-fill object-center"
          />
          <span className="sm:hidden">
            <Logo />
          </span>
        </div>
        <nav className="hidden xl:flex gap-4 items-center justify-center">
          {[
            "Products",
            "Partnerships",
            "Sponsorships",
            "Education",
            "Docs",
            "Team",
          ].map((item, i) => (
            <p
              key={i}
              className="font-medium text-base cursor-pointer tracking-normal text-[#7B8191]"
            >
              {item}
            </p>
          ))}

          <p className="font-semibold text-base cursor-pointer tracking-normal text-[#E3E8F3]">
            Trade Dividends
          </p>
        </nav>
        <div className="hidden xl:block">
          <button className="button-gradient font-normal text-base/[21.79px] open-sans transition-all hover:bg-opacity-80">
            Launch App
          </button>
        </div>

        <span
          className="xl:hidden cursor-pointer"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <Hamburger />
        </span>

        <div
          className={`${
            showNav ? "translate-x-0" : "translate-x-[100%]"
          } xl:hidden transition-transform duration-500 transform fixed inset-0 z-40 flex flex-col gap-4 items-center w-full border-t border-t-white/20 bg-[#131B2F]`}
        >
          <span
            className="cursor-pointer self-end pr-[5%] pt-4"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <Cancel />
          </span>
          <nav className="flex flex-col w-full items-center justify-center border-t border-t-white/20">
            {[
              "Products",
              "Partnerships",
              "Sponsorships",
              "Education",
              "Docs",
              "Team",
              "Trade Dividends",
            ].map((item, i) => (
              <p
                key={i}
                className="font-medium p-4 text-center border-b border-white/20 w-full text-base cursor-pointer tracking-normal text-[#7B8191]"
              >
                {item}
              </p>
            ))}
          </nav>
          <button className="mt-4 button-gradient font-normal text-base/[21.79px] open-sans transition-all hover:bg-opacity-80">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
