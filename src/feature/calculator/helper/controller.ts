import Notify from "@/utils/Notify";
import {  AgeTradeHistory } from "./api";



export const getTradeHistory = (
    setTableData: Function,
    setLoading: Function,
) => {
    setLoading(true)
    AgeTradeHistory().then((res: any) => {
        setLoading(false)
        setTableData(res.data.data)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}