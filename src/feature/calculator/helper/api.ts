import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgeTradeHistory = async (): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_URL}/trades`, {});
};
