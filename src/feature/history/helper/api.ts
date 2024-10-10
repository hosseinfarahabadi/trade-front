import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgeTradeHistory = async (): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_URL}/trades`, {});
};
export const AsetTradeHistory = async (body:any): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_URL}/trades`, body);
};

