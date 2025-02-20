import Image from "next/image";
import logo from "@/assets/images/logo_small.png";
import { Telegram } from "@/assets/svg/telegram";
import { X } from "@/assets/svg/x";

export default function Footer() {
  return (
    <footer className="w-full px-[5%] flex items-center justify-center pb-[30px]">
      <div className="border-t border-[#FFFFFF33] pt-[30px] flex flex-col gap-4 justify-center md:flex-row items-center md:justify-between w-full max-w-screen-3xl">
        <div className="flex-shrink-0 h-[30px] w-[200px]">
          <Image
            src={logo}
            alt="logo"
            className="size-full object-fill object-center"
          />
        </div>

        <p className="open-sans font-normal text-base/[21.79px] text-[#8CA0B3]">
          Copyright &copy; {new Date().getFullYear()} Eagle AI
        </p>

        <div className="flex items-center justify-center gap-4">
          <a href="#">
            <Telegram />
          </a>
          <a href="#">
            <X />
          </a>
        </div>
      </div>
    </footer>
  );
}
