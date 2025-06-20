import { BASE_API_URL } from "@/shared/constants/api";
import { Racket } from "@/shared/types/racket";
import { Response } from "@/shared/types/response";

export const getTop10Rackets = async (): Promise<Response<Racket[]>> => {
  const result = await fetch(`${BASE_API_URL}/top-10`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data = await result.json();

  return { isError: false, data };
};
