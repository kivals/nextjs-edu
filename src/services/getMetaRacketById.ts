import { Racket } from "@/shared/types/racket";
import { Response } from "@/shared/types/response";
import { BASE_API_URL } from "@/shared/constants/api";

type Params = {
  id: string;
};

export const getMetaRacketById = async ({
  id,
}: Params): Promise<Response<Racket>> => {
  const result = await fetch(`${BASE_API_URL}/meta/product/${id}`, {
    next: {
      revalidate: 20,
    },
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: Racket } = await result.json();

  return { isError: false, data: data.product };
};
