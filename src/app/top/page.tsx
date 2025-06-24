import RacketsContainer from "@/components/RacketsContainer";
import { Suspense } from "react";
import { getTop10Rackets } from "@/services/getTop10Rackets";

export default function TopRacketsPage() {
  return (
    <Suspense fallback={<div>Loading top 10 rackets...</div>}>
      <RacketsContainer fetcher={getTop10Rackets} />
    </Suspense>
  );
}
