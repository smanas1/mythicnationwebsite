import Image from "next/image";
import { Luckiest_Guy } from "next/font/google";
import bgImage from "../public/img/download.jpg";
import trophy from "../public/img/trophy.png";
import mythic from "../public/img/Group 2.png";
import featureImg from "../public/img/feature.png";
import Copy from "@/components/Copy";
const LuckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="h-screen overflow-hidden justify-center w-full relative">
      <Image className="bg-cover" src={bgImage} alt="bg image" />
      <div className=" z-10 w-full top-0 absolute mt-20">
        <div className=" flex justify-center flex-col items-center ">
          <Image src={mythic} alt="mythic" />
          <div className="mt-6 flex justify-center  items-center">
            <h3 className="font-bold ipbg text-green-600">
              play.mythicnation.fun
            </h3>
            <div>
              <Copy />
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-10">
          <iframe
            src="https://discord.com/widget?id=796376180336754719&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
          <div className="boxbg flex flex-col items-center">
            <Image src={featureImg} width={60} height={60} alt="feature.png" />
            <h2 className="text-3xl mb-10">Survival</h2>
            <hr />
            <p>Ranks</p>
            <p>Claims</p>
            <p>Clan</p>
            <p>Clan Ware</p>
            <p>Economy</p>
            <p>Kits</p>
            <p>Vote Reward</p>
            <h3 className="capitalize mt-10">For More Info join our discord</h3>
          </div>
          <div className="boxbg flex flex-col items-center">
            <Image src={trophy} width={60} height={60} alt="feature.png" />
            <h2 className="text-3xl mb-10">Ranks</h2>
            <hr />
            <h3 className="text-xl font-bold text-red-500">Conqueror</h3>
            <p>Duration 1 Month</p>
            <p>12000 Claim </p>
            <p>Money 500</p>

            <h3 className="text-xl font-bold text-yellow-300">Emperor</h3>
            <p>Duration 1 Month</p>
            <p>6000 Claim</p>
            <p>Money 250</p>
            <h3 className="capitalize mt-10">For More Info join our discord</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
