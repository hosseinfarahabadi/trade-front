import FetchApi, { TResponse } from "@/utils/FetchApi";

export const ALogin = async (body: any): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_URL}/auth/local`, body);
};



