import Image from "next/image";
import React from "react";
import { Racket } from "@/shared/types/racket";
import NextLink from "next/link";

const RacketCard = ({ racket }: { racket: Racket }) => {
  return (
    <NextLink href={`/racket/${racket.id}`} className="block">
      <article
        className="flex h-[400px] max-w-sm flex-col items-center rounded-lg border border-gray-400 p-4"
        key={racket.id}
      >
        <div className="flex w-full flex-1 items-center justify-center">
          <Image
            src={racket.imageUrl}
            alt={racket.model}
            width={300}
            height={300}
            className="max-h-64 object-contain"
          />
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">{racket.name}</p>
      </article>
    </NextLink>
  );
};

export default RacketCard;
