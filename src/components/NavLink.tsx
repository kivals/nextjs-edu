"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  url: string;
  title: string;
};

const NavLink = ({ url, title }: Props) => {
  const pathname = usePathname();

  return (
    <NextLink
      className={`${pathname === url ? "font-bold text-blue-600 underline" : ""}`}
      href={url}
    >
      {title}
    </NextLink>
  );
};

export default NavLink;
