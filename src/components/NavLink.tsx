"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  url: string;
  title: string;
};

const NavLink = ({ url, title }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${pathname === url ? "font-bold text-blue-600 underline" : ""}`}
      href={url}
    >
      {title}
    </Link>
  );
};

export default NavLink;
