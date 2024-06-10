import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgetHighestAmount = async (page: number, perPage: number): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_URL}/trades`, {});
};

export const AgetHighestAmountExcel = async (startDate: string, endDate: string): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_URL}/admin/reports/users/most-deleted-machine?${startDate ? "start_date=" + startDate : ""}&${endDate ? "end_date=" + endDate : ""}&limit=100&excel=1`,
        {
            responseType: "blob",
        })
}

