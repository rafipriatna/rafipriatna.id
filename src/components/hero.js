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
          <a
            href="https://www.credential.net/b216417a-3265-4448-8913-f6a7d9122be1"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              className="mt-5"
              placeholder="blurred"
              width={40}
              height={40}
              src="../images/OSCP.png"
              alt="OffSec Certified Professional"
              title="OffSec Certified Professional"
            />
          </a>
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
