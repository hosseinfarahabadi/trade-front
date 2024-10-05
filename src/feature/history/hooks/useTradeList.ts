import useDebounce from "@/hooks/useDebounce";
import Notify from "@/utils/Notify";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import {  getTradeHistory } from "../helper/controller";
import { ITradeHistory, ITradeObject } from "../interfaces";

export const useTradeList = () => {
    const today = new DateObject().format("YYYY-MM-DD")
    const todayFa = new DateObject({ calendar: persian, locale: persian_fa }).format("YYYY/MM/DD")
    const [disableBtn, setDiasableBtn] = useState<boolean>(false);
    const [excelDisableBtn, setExcelDisableBtn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [tableData, setTableData] = useState<ITradeHistory[]>([])
    const [tradeObject, setTradeObject] = useState<ITradeObject[]>([])

    const [search, setSearch] = useState<string>("");
    const debouncedcSearch = useDebounce<string>(search, 1000);

    const [startDate, setStartDate] = useState<string>(today);
    const [endDate, setEndDate] = useState<string>(today);

    // const searchBtnHandler = (selectedPage: number, selectedPerPage: number) => {
    //     getHighestAmount(selectedPage, selectedPerPage, startDate, endDate, debouncedcSearch, setDiasableBtn, setTableData, setLoading, setTotalPage)
    // }

    useEffect(() => {
        
        getTradeHistory(setTableData, setLoading)

    }, [])
    useEffect(() => {
        if (tableData.length > 0) {
            const newTemp = tableData.map((item:ITradeHistory) =>({
                id: item.id,
                result: item.result,
                drowDown: item.drowDown,
              }))
              setTradeObject(newTemp)
        }

    }, [tableData])

    return {
        tableData,
        setTableData,
        page,
        setPage,
        perPage,
        setPerPage,
        loading,
        setLoading,
        totalPage,
        setTotalPage,
        tradeObject,
    }
}