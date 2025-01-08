import Notify from "@/utils/Notify";
import {  AdeleteHandler, AgetJournals, AgeTradeHistory, AsetTradeHistory, AupdateHandler } from "./api";


export const getTradeHistory = (
    setTableData: Function,
    setLoading: Function,
    query: any,
) => {
    setLoading(true)
    AgeTradeHistory(query).then((res: any) => {
        console.log("history",res.data)
        setLoading(false)
        setTableData(res.data.trades)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}
export const getJournals = (
    setTableData: Function,
    setJournalFilter: Function,
    setLoading: Function,
) => {
    setLoading(true)
    AgetJournals().then((res: any) => {
        setLoading(false)
        setTableData(res.data.data)
        const newObject = {
            id: -1,
            attributes: {
              name: "ALL"
            }
          };
          const updateData = [newObject, ...res.data.data]
        console.log(updateData)
        setJournalFilter(updateData)
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
        getTradeHistory(setTableData, setLoading,"")
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
        getTradeHistory(setTableData, setLoading,"")
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
        getTradeHistory(setTableData, setLoading,"")
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}

