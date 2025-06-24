import { Racket } from "@/shared/types/racket";
import { BASE_API_URL } from "@/shared/constants/api";
import { Response } from "@/shared/types/response";

type Params = {
  id: string;
};

export const getRacketById = async ({
  id,
}: Params): Promise<Response<Racket>> => {
  const result = await fetch(`${BASE_API_URL}/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: Racket } = await result.json();

  return { isError: false, data: data.product };
};
