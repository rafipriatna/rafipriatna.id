import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function AuthorCard({ articleDate }) {
  return (
    <div className="flex max-w-none items-center gap-4">
      <StaticImage
        src="../images/me.png"
        alt="8bit me wkwkw"
        className="rounded-full bg-indigo-500 dark:bg-indigo-800 w-10 h-10"
      />
      <div className="leading-tight">
        <p className="font-medium text-primary">Rafi Priatna Kasbiantoro</p>
        <p className="text-gray-500">
          <time dateTime={articleDate}>{articleDate}</time>
        </p>
      </div>
    </div>
  );
}
