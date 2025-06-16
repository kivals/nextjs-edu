import RacketList from "@/components/RacketList";
import { rackets } from "@/data/mock";

export default function RacketsPage() {
  return (
    <div>
      <RacketList rackets={rackets} />
    </div>
  );
}
