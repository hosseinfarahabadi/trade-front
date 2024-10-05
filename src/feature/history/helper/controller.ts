import Notify from "@/utils/Notify";
import {  AgeTradeHistory } from "./api";


export const getTradeHistory = (
    setTableData: Function,
    setLoading: Function,
) => {
    setLoading(true)
    AgeTradeHistory().then((res: any) => {
        setLoading(false)
        // console.log(res.data)
        setTableData(res.data.trades)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}

