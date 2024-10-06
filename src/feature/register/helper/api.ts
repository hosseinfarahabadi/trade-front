import FetchApi, { TResponse } from "@/utils/FetchApi";

export const Aregister = async (body: any): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_URL}/auth/local/register`, body);
};
