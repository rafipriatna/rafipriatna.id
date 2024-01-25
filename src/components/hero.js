import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <div className="my-10 lg:mt-20 mb-10 break-words tracking-wide leading-loose hero">
      <div className="flex flex-row items-center">
        <div className="w-full lg:w-4/6">
          <h1 className="text-4xl font-semibold">Hei, saya Rafi!</h1>
          <div className="text-lg leading-relaxed md:order-1 mt-8">
            <p>
              Saya seorang Offensive Cyber Security Engineer yang sehari-hari
              melakukan <i>penetration testing</i> dan{" "}
              <i>vulnerability assessment</i>.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 relative hidden lg:block ml-auto">
          <StaticImage
            placeholder="blurred"
            src="../images/me_transparent_big.png"
            alt="8bit me wkwkw"
          />
        </div>
      </div>
    </div>
  );
}
