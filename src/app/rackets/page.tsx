import RacketsContainer from "@/components/RacketsContainer";
import { getRackets } from "@/services/getRackets";
import { Suspense } from "react";

export default function RacketsPage() {
  return (
    <Suspense fallback={<div>Loading rackets...</div>}>
      <RacketsContainer fetcher={getRackets} />
    </Suspense>
  );
}
