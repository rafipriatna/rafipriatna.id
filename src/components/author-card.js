import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function AuthorCard({ articleDate }) {
  return (
    <div class="flex max-w-none items-center gap-4">
      <StaticImage
        src="../images/me_transparent_big.png"
        alt="8bit me wkwkw"
        width="40"
        height="40"
        className="rounded-full"
      />
      <div class="leading-tight">
        <p class="font-medium text-primary">Rafi Priatna Kasbiantoro</p>
        <p class="text-gray-500">
          <time datetime={articleDate}>{articleDate}</time>
        </p>
      </div>
    </div>
  );
}
