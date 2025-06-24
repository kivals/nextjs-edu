import Image from "next/image";
import { getRacketById } from "@/services/getRacketById";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getMetaRacketById } from "@/services/getMetaRacketById";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;

  const result = await getMetaRacketById({ id });

  if (result.isError || !result.data) {
    return {
      title: "tennis racket",
    };
  }

  return {
    title: result.data.name,
  };
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RacketPage({ params }: Props) {
  const { id } = await params;
  const { data: racket, isError } = await getRacketById({ id });

  if (isError) {
    return "someError";
  }

  if (!racket) {
    return notFound();
  }

  return (
    <div className="flex gap-4">
      <div className="flex w-1/4 flex-col gap-4">
        <p className="text-gray-400">{racket.brand.name}</p>
        <p className="text-2xl font-bold">{racket.name}</p>
        <p>{racket.description}</p>
      </div>
      <div className="flex flex-1 justify-center">
        <Image
          src={racket.imageUrl}
          alt={racket.model}
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="flex w-1/4 items-center justify-center">
        <p className="text-2xl font-bold">€{racket.price}</p>
      </div>
    </div>
  );
}

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
