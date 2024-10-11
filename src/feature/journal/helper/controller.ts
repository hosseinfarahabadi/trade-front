import Notify from "@/utils/Notify";
import {  AdeleteHandler, AsetJournals, AgetJournals, AupdateHandler } from "./api";


export const getJournals = (
    setTableData: Function,
    setLoading: Function,
) => {
    setLoading(true)
    AgetJournals().then((res: any) => {
        setLoading(false)
        setTableData(res.data.data)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}
export const setJournals = (
    body: any,
    setLoading: Function,
    setTableData: Function,
) => {
    setLoading(true);
    setTableData([]);
    AsetJournals(body).then((res: any) => {
        setLoading(false);
        getJournals(setTableData, setLoading)
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
        getJournals(setTableData, setLoading)
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
        getJournals(setTableData, setLoading)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setLoading(false)
    })
}

