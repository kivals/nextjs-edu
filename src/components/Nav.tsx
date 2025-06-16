"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { url: "/", title: "Главная" },
  { url: "/rackets", title: "Ракетки" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex justify-between gap-x-4">
        {menu.map(({ url, title }) => (
          <li key={url}>
            <Link
              className={`${pathname === url ? "font-bold text-blue-600 underline" : ""}`}
              href={url}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
