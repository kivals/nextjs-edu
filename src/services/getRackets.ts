import { BASE_API_URL } from "@/shared/constants/api";
import { Racket } from "@/shared/types/racket";
import { Response } from "@/shared/types/response";

export const getRackets = async (
  { limit } = { limit: 20 },
): Promise<Response<Racket[]>> => {
  const result = await fetch(`${BASE_API_URL}/products?limit=${limit}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data = await result.json();

  return { isError: false, data };
};
