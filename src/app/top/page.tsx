import RacketsContainer from "@/components/RacketsContainer";
import { Suspense } from "react";
import { getTop10Rackets } from "@/services/getTop10Rackets";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Tennis top 10 rackets",
  description: "Tennis top 10 rackets",
};

export default function TopRacketsPage() {
  return (
    <Suspense fallback={<div>Loading top 10 rackets...</div>}>
      <RacketsContainer fetcher={getTop10Rackets} />
    </Suspense>
  );
}
