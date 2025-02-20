import Image from "next/image";
import hero_img from "@/assets/images/hero_img.png";
import trade1 from "@/assets/images/Trade3 1.png";
import trade2 from "@/assets/images/Trade3 2.png";
import key from "@/assets/images/key.png";
import medal from "@/assets/images/medal.png";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center flex-col justify-center px-[5%]">
        <section className="py-[30px] ">
          <div className="bg-[#00F6FFDE] rounded-xl p-4 flex items-center justify-center">
            <p className="font-normal text-[17px]/[24px] -tracking-[0.4px] text-black">
              Eagle AI Labs: Partnership and Co-Ownership of a U.S. Regulated
              Crypto Hedgefund. This enables us to launch a new product,
              TradeDividends.{" "}
              <span className="font-semibold underline cursor-pointer">
                Learn More
              </span>
            </p>
          </div>
        </section>
        <section className="pb-[30px] flex flex-col md:flex-row items-center gap-[5%] justify-between">
          <div className="md:w-3/5 flex flex-col justify-center gap-[30px]">
            <h1 className="text-7xl/[108px] font-normal text-gradient">
              Pioneering the Future of Digital Asset Investment
            </h1>
            <p className="text-lg/[27px] font-normal">
              Eagle AI Labs is revolutionizing crypto asset management through
              our ground-breaking partnership with a U.S.-regulated crypto hedge
              fund. This exclusive collaboration combines our advanced
              AI-powered BTC prediction technology with institutional-grade
              investment expertise.
            </p>
            <div>
              <button className="button-gradient font-normal text-base/[21.79px] open-sans transition-all hover:bg-opacity-80">
                Register your interest now
              </button>
            </div>
          </div>
          <div className="md:w-2/5">
            <Image src={hero_img} alt="hero section image" />
          </div>
        </section>
        <section className="pt-[60px] pb-[80px] flex flex-col md:flex-row items-center justify-between gap-[50px]">
          <div className="md:w-2/5">
            <Image src={trade1} alt="" />
          </div>
          <div className="md:w-3/5 space-y-4">
            <h2 className="text-5xl/[72px]">A new era in crypto investment</h2>
            <p className="text-lg">
              Our partnership represents a milestone in institutional crypto
              adoption, featuring:
            </p>
            <ul className="w-full items-start flex flex-col pl-4 open-sans">
              <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                <span className="size-1 bg-[#8CA0B3] rounded-full" />
                Exclusive licensing of Eagle AI Labs&apos; proprietary BTC price
              </li>
              <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                <span className="size-1 bg-[#8CA0B3] rounded-full" />
                prediction algorithms Significant equity stake in a fully
                regulated U.S. hedge fund
              </li>
              <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                <span className="size-1 bg-[#8CA0B3] rounded-full" />
                Management team with proven track record of managing billions in
                AUM
              </li>
              <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                <span className="size-1 bg-[#8CA0B3] rounded-full" />
                Full compliance with U.S. regulatory requirements
              </li>
              <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                <span className="size-1 bg-[#8CA0B3] rounded-full" />
                Strategic timing aligned with anticipated favourable U.S.
                regulatory environment
              </li>
            </ul>
          </div>
        </section>
        <section className="pt-[60px] pb-[80px] flex flex-col md:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="md:w-2/5">
            <Image src={trade2} alt="" />
          </div>
          <div className="md:w-3/5 space-y-4">
            <h2 className="text-5xl/[72px]">
              Trade Dividends Rewarding our comunity
            </h2>

            <p className="text-lg">
              This institutional partnership enables the launch of our
              innovative TradeDividends program:
            </p>
            <ul className="w-full items-start flex flex-col pl-4 open-sans">
              <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                <span className="size-1 bg-[#8CA0B3] rounded-full" />
                Exclusive USDC rewards for $EAI stakers
              </li>
              <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                <span className="size-1 bg-[#8CA0B3] rounded-full" />
                Direct benefit from institutional trading success
              </li>
              <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                <span className="size-1 bg-[#8CA0B3] rounded-full" />
                Sustainable yield generation backed by hedge fund performance
              </li>
            </ul>
          </div>
        </section>
        <section className="pt-[60px] pb-[80px] flex flex-col w-full gap-[30px] relative">
          <h2 className="text-5xl/[72px]">
            Limited Availability - Register now to join wait List
          </h2>
          <div className="flex flex-col md:flex-row gap-[30px]">
            <div className="flex flex-col gap-[30px] w-3/5">
              <div className="bg-white/10 rounded-[10px] border border-white/20 p-[20px] pb-[30px] flex gap-[15px]">
                <Image
                  src={key}
                  alt="key icon"
                  className="flex-shrink-0 size-[100px]"
                />
                <div className="space-y-[20px]">
                  <h4 className="text-lg/[27px] ">Limited Access Available</h4>
                  <p className="text-[#8CA0B3] text-base open-sans">
                    Be among the first to access institutional-grade crypto
                    investment opportunities. Our exclusive waitlist is now open
                    for:
                  </p>
                  <ul className="w-full items-start flex flex-col pl-4 open-sans">
                    <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                      <span className="size-1 bg-[#8CA0B3] rounded-full" />
                      Early Community Members
                    </li>
                    <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                      <span className="size-1 bg-[#8CA0B3] rounded-full" />
                      Active $EAI Holders
                    </li>
                  </ul>
                  <p className="text-[#8CA0B3] text-base open-sans">
                    🔒 Waitlist Closes: January 31, 2025
                  </p>
                </div>
              </div>
              <div className="bg-white/10 rounded-[10px] border border-white/20 p-[20px] pb-[30px] flex gap-[15px]">
                <Image
                  src={medal}
                  alt="medal icon"
                  className="flex-shrink-0 size-[100px]"
                />
                <div className="space-y-[20px]">
                  <h4 className="text-lg/[27px]">
                    Benefits of signing up early
                  </h4>

                  <ul className="w-full items-start flex flex-col pl-4 open-sans">
                    <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                      <span className="size-1 bg-[#8CA0B3] rounded-full" />
                      Priority access when the fund launches
                    </li>
                    <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                      <span className="size-1 bg-[#8CA0B3] rounded-full" />
                      Early information about TradeDividends
                    </li>
                    <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                      <span className="size-1 bg-[#8CA0B3] rounded-full" />
                      Exclusive insights from our institutional trading team
                    </li>
                    <li className="flex gap-2 items-center justify-center text-[#8CA0B3] text-base font-normal">
                      <span className="size-1 bg-[#8CA0B3] rounded-full" />
                      Special allocation opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <form className="flex flex-col space-y-[31px] w-2/5">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                required
                className="h-[66px] pl-[20px] pr-4 rounded-[25px] placeholder:#ABAEB4 text-white focus:outline-none bg-white/20"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                required
                className="h-[66px] pl-[20px] pr-4 rounded-[25px] placeholder:#ABAEB4 text-white focus:outline-none bg-white/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="h-[66px] pl-[20px] pr-4 rounded-[25px] placeholder:#ABAEB4 text-white focus:outline-none bg-white/20"
              />
              <input
                type="text"
                name="telegram"
                placeholder="Telegram Username"
                required
                className="h-[66px] pl-[20px] pr-4 rounded-[25px] placeholder:#ABAEB4 text-white focus:outline-none bg-white/20"
              />
              <div className="self-end">
                <button className="button-gradient font-normal text-base/[21.79px] open-sans transition-all hover:bg-opacity-80">
                  Register your interest now
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <div className="bg-gradient mb-[50px] pt-[80px] pb-[120px] flex items-center flex-col justify-center px-[5%]">
        <section className="space-y-[15px]">
          <h1 className="text-7xl/[108px] font-normal">Coming Q1 2025</h1>
          <ul className="w-full items-start flex flex-col pl-4 open-sans">
            <li className="flex gap-2 items-center justify-center text-[#E3E8F3] text-base font-normal">
              <span className="size-1 bg-[#E3E8F3] rounded-full" />
              Full fund details and officer announcements
            </li>
            <li className="flex gap-2 items-center justify-center text-[#E3E8F3] text-base font-normal">
              <span className="size-1 bg-[#E3E8F3] rounded-full" />
              TradeDividends program specifics
            </li>
            <li className="flex gap-2 items-center justify-center text-[#E3E8F3] text-base font-normal">
              <span className="size-1 bg-[#E3E8F3] rounded-full" />
              Institutional partnership roadmap
            </li>
            <li className="flex gap-2 items-center justify-center text-[#E3E8F3] text-base font-normal">
              <span className="size-1 bg-[#E3E8F3] rounded-full" />
              Regulatory framework overview
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
