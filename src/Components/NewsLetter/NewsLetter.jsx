import React from "react";
import NumberBg from "../NumberBg/NumberBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function NewsLetter() {
  return (
    <div className="mt-20">
      <NumberBg>
        <div className="flex-col mx-auto">
          <div className="mini-title2 w-max mx-auto">
            <span className="">NEWSLETTER</span>
          </div>
          <h4 className="mt-5 font-bold text-light text-4xl text-center">
            Stay Always In Touch
          </h4>
          <p className="text-light text-center w-[60%] mx-auto mt-5">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita
            duo justo
          </p>
          <div className="mt-5 flex items-center w-[60%] mx-auto relative">
            <input type="email" placeholder="Enter Your Email" className="flex-1 h-[50px] rounded-3xl" required />
            <button className="absolute left-[92%] cursor-pointer text-primary text-2xl border-0" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </NumberBg>
    </div>
  );
}

export default NewsLetter;
