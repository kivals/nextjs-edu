import { getRackets } from "@/services/getRackets";
import { Suspense } from "react";
import { getTop10Rackets } from "@/services/getTop10Rackets";
import ShowAllLink from "@/components/ShowAllLink";
import RacketsContainer from "@/components/RacketsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis store",
  description: "tennis rackets",
};

export default async function Home() {
  return (
    <>
      <div className="mb-4 flex justify-between">
        <ShowAllLink url="/rackets">Все</ShowAllLink>
      </div>
      <Suspense fallback={<div>Loading rackets...</div>}>
        <RacketsContainer
          title="Ракетки"
          fetcher={getRackets}
          fetcherParams={{ limit: 10 }}
        />
      </Suspense>
      <Suspense fallback={<div>Loading top 10 rackets...</div>}>
        <RacketsContainer title="Топ 10" fetcher={getTop10Rackets} />
      </Suspense>
    </>
  );
}
