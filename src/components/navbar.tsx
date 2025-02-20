import Image from "next/image";
import logo_big from "@/assets/images/logo.png";

export default function Navbar() {
  return (
    <header className="bg-[#131B2F] px-[5%] h-[97px] w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-between gap-4 max-w-screen-3xl">
        <div className="h-[35px] flex-shrink-0 w-40 xl:w-[247px]">
          <Image
            src={logo_big}
            alt="logo"
            className="size-full object-fill object-center"
          />
        </div>
        <nav className="flex gap-4 items-center justify-center">
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
        <div>
          <button className="button-gradient font-normal text-base/[21.79px] open-sans transition-all hover:bg-opacity-80">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
