import Notify from "@/utils/Notify";
import {  AgeTradeHistory, AsetTradeHistory } from "./api";


export const getTradeHistory = (
    setTableData: Function,
    setLoading: Function,
) => {
    setLoading(true)
    AgeTradeHistory().then((res: any) => {
        setLoading(false)
        console.log(res.data.data)
        setTableData(res.data.data)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}
export const setTradeHistory = (
    body: any,
    setLoading: Function,
) => {
    setLoading(true)
    AsetTradeHistory(body).then((res: any) => {
        setLoading(false)
        console.log(res.data.data)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}

