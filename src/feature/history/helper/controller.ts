import Notify from "@/utils/Notify";
import {  AdeleteHandler, AgeTradeHistory, AsetTradeHistory, AupdateHandler } from "./api";


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
export const setTradeHistory = (
    body: any,
    setLoading: Function,
    setTableData: Function,
) => {
    setLoading(true)
    AsetTradeHistory(body).then((res: any) => {
        setLoading(false);
        getTradeHistory(setTableData, setLoading)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}
export const deleteHandler = (
    id: any,
    setLoading: Function,
    setTableData: Function,
) => {
    setTableData([]);
    setLoading(true)
    AdeleteHandler(id).then((res: any) => {
        setLoading(false);
        getTradeHistory(setTableData, setLoading)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}
export const updateHandler = (
    id: any,
    body: any,
    setLoading: Function,
    setTableData: Function,
) => {
    setTableData([]);
    setLoading(true)
    AupdateHandler(id,body).then((res: any) => {
        setLoading(false);
        getTradeHistory(setTableData, setLoading)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}

