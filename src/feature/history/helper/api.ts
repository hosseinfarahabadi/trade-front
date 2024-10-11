import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgeTradeHistory = async (): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_URL}/trades`, {});
};
export const AgetJournals = async (): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_URL}/journals`, {});
};
export const AsetTradeHistory = async (body:any): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_URL}/trades`, body);
};
export const AdeleteHandler = async (id:any): Promise<TResponse<any>> => {
    return FetchApi.delete(`${process.env.NEXT_PUBLIC_URL}/trades/${id}`, {});
};
export const AupdateHandler = async (id:any,body:any): Promise<TResponse<any>> => {
    return FetchApi.put(`${process.env.NEXT_PUBLIC_URL}/trades/${id}`, body);
};

