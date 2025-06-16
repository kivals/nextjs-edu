import React from "react";
import { Racket } from "@/shared/types";
import RacketCard from "@/components/RacketCard";

type RacketListProps = {
  rackets: Racket[];
};

const RacketList = ({ rackets }: RacketListProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {rackets.length > 0 &&
        rackets.map((racket) => <RacketCard key={racket.id} racket={racket} />)}
    </div>
  );
};

export default RacketList;
