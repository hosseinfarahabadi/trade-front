import Notify from "@/utils/Notify";
import { AgetHighestAmount, AgetHighestAmountExcel } from "./api";


export const getHighestAmount = (
    page: number,
    perPage: number,
    setTableData: Function,
    setLoading: Function,
    setTotalPage: Function
) => {
    setLoading(true)
    AgetHighestAmount(page, perPage).then((res: any) => {
        setLoading(false)
        console.log(res)
        setTableData(res.data.data)
        setTotalPage(res.data.data.data.last_page)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}

export const getHighestAmountExcel = (startDate: string, endDate: string, setExcelDisableBtn: Function) => {
    setExcelDisableBtn(true)
    AgetHighestAmountExcel(startDate, endDate).then((res: any) => {
        setExcelDisableBtn(false)
    }).catch((err: any) => {
        console.log(err);
        setExcelDisableBtn(false)
        Notify.error(err.data.error.message);

    })
}