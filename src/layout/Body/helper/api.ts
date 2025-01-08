import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgetUserInfo = async (): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_URL}/users/me?populate=*`, {});
};



