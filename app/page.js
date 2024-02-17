import Image from "next/image";
import { Luckiest_Guy } from "next/font/google";
import bgImage from "../public/img/download.jpg";
import trophy from "../public/img/trophy.png";
import mythic from "../public/img/Group 2.png";
import featureImg from "../public/img/feature.png";
import Copy from "@/components/Copy";
import Link from "next/link";
const LuckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="h-screen lg:overflow-hidden justify-center w-full relative">
      <Image
        className="lg:bg-cover object-cover h-full w-full"
        src={bgImage}
        alt="bg image"
      />
      <div className=" z-10 w-full top-0 absolute mt-20">
        <div className=" flex justify-center flex-col items-center ">
          <Image className="w-80" src={mythic} alt="mythic" />
          <div className="mt-6 flex justify-center  items-center">
            <h3 className="font-bold ipbg text-green-600">
              play.mythicnation.fun
            </h3>
            <div>
              <Copy />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-around mt-10">
          <iframe
            src="https://discord.com/widget?id=796376180336754719&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
          <div className="boxbg flex flex-col items-center max-xl:mt-20 ">
            <Image src={featureImg} width={60} height={60} alt="feature.png" />
            <h2 className="text-3xl mb-10">Survival</h2>
            <hr />
            <p className="font-bold capitalize">java and bedrock</p>
            <p className="font-bold">Ranks</p>
            <p className="font-bold">Claims</p>
            <p className="font-bold">Clan</p>
            <p className="font-bold">Clan Ware</p>
            <p className="font-bold">Economy</p>
            <p className="font-bold">Kits</p>
            <p className="font-bold">Vote Reward</p>
            <Link href="https://discord.com/channels/796376180336754719/956120142331387964">
              <button className="mt-10 bg-[#5865f2] rounded-md px-6 py-3 text-white">
                Start Now
              </button>
            </Link>
          </div>
          <div className="boxbg flex flex-col items-center max-xl:mt-10  max-lg:mb-6 ">
            <Image src={trophy} width={60} height={60} alt="feature.png" />
            <h2 className="text-3xl mb-10">Ranks</h2>
            <hr />
            <h3 className="text-xl font-bold text-red-500">Conqueror</h3>
            <p className="font-bold">Duration 1 Month</p>
            <p className="font-bold">12000 Claim </p>
            <p className="font-bold">Price 200</p>

            <h3 className="text-xl font-bold text-yellow-300 max-lg:mt-5">
              Emperor
            </h3>
            <p className="font-bold">Duration 1 Month</p>
            <p className="font-bold">6000 Claim</p>
            <p className="font-bold">Price 100</p>
            <Link href="https://discord.com/channels/796376180336754719/955421297905639474">
              <button className="mt-10 bg-[#5865f2] rounded-md px-6 py-3 text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
