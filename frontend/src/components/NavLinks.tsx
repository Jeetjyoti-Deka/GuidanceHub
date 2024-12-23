"use client";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  const [activeLink, setActiveLink] =
    useState<(typeof NAV_LINKS)[number]["text"]>("Home");
  return (
    <>
      {NAV_LINKS.map((link) => (
        <div key={link.src}>
          <Link
            className={cn("text-black/75", {
              "text-slate-900 font-medium": activeLink === link.text,
            })}
            href={link.src}
            onClick={() => setActiveLink(link.text)}
          >
            {link.text}
          </Link>
        </div>
      ))}
    </>
  );
};
export default NavLinks;
