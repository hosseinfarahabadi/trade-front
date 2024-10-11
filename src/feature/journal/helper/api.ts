import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgetJournals = async (): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_URL}/journals`, {});
};
export const AsetJournals = async (body:any): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_URL}/journals`, body);
};
export const AdeleteHandler = async (id:any): Promise<TResponse<any>> => {
    return FetchApi.delete(`${process.env.NEXT_PUBLIC_URL}/journals/${id}`, {});
};
export const AupdateHandler = async (id:any,body:any): Promise<TResponse<any>> => {
    return FetchApi.put(`${process.env.NEXT_PUBLIC_URL}/journals/${id}`, body);
};

