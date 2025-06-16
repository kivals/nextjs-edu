import { rackets } from "@/data/mock";
import RacketCard from "@/components/RacketCard";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl">Ракетки</h1>
        <Link
          href={"/rackets"}
          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
        >
          Все
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
      </div>
      <div className="grid grid-cols-3 gap-2">
        <RacketCard racket={rackets[0]} />
        <RacketCard racket={rackets[1]} />
        <RacketCard racket={rackets[2]} />
      </div>
    </>
  );
}
