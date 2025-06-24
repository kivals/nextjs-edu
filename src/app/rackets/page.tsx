import RacketsContainer from "@/components/RacketsContainer";
import { getRackets } from "@/services/getRackets";
import { Suspense } from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Tennis store",
  description: "tennis rackets",
};

export default function RacketsPage() {
  return (
    <Suspense fallback={<div>Loading rackets...</div>}>
      <RacketsContainer fetcher={getRackets} />
    </Suspense>
  );
}
