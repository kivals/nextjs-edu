import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";

type Props = {
  url: string;
};

const ShowAllLink: FC<PropsWithChildren<Props>> = ({ children, url }) => {
  return (
    <Link
      href={url}
      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
    >
      {children}
      <svg
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M14 5l7 7-7 7M5 12h16" />
      </svg>
    </Link>
  );
};

export default ShowAllLink;
