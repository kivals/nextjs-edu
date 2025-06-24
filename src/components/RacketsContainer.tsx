import { notFound } from "next/navigation";
import RacketCard from "@/components/RacketCard";
import { Response } from "@/shared/types/response";
import { Racket } from "@/shared/types/racket";

interface Props {
  title?: string;
  fetcher: (params?: { limit: number }) => Promise<Response<Racket[]>>;
  fetcherParams?: { limit: number };
}

const RacketsContainer = async ({ fetcher, title, fetcherParams = undefined }: Props) => {
  const { data: rackets, isError } = await fetcher(fetcherParams)

  if (isError) {
    return "someError";
  }

  if (!rackets) {
    return notFound();
  }

  return (
    <>
      {title && <h2 className="mb-4 text-2xl">{title}</h2>}
      <div className="grid grid-cols-3 gap-2">
        {rackets.map((racket) => (
          <RacketCard key={racket.id} racket={racket} />
        ))}
      </div>
    </>
  );
};

export default RacketsContainer;
