"use client";
import Image from "next/image";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import tick from "../public/img/check.png";

const Copy = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText("play.mythicnation.fun");
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 5000);
  };
  return (
    <div>
      <div className="copybg " onClick={handleClick}>
        {click ? (
          <Image width={25} src={tick} alt="tick" />
        ) : (
          <MdContentCopy className="text-white" size={25} />
        )}
      </div>
    </div>
  );
};

export default Copy;
