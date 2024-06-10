import useDebounce from "@/hooks/useDebounce";
import Notify from "@/utils/Notify";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { getHighestAmount, getHighestAmountExcel } from "../helper/controller";
import { ITradeHistory, ITradeObject } from "../interfaces";

export const useCalculator = () => {
    const today = new DateObject().format("YYYY-MM-DD")
    const todayFa = new DateObject({ calendar: persian, locale: persian_fa }).format("YYYY/MM/DD")
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [tableData, setTableData] = useState<ITradeHistory[]>([])
    const [tradeObject, setTradeObject] = useState<ITradeObject[]>([])

    const [search, setSearch] = useState<string>("");

    const [startDate, setStartDate] = useState<string>(today);

    // const searchBtnHandler = (selectedPage: number, selectedPerPage: number) => {
    //     getHighestAmount(selectedPage, selectedPerPage, startDate, endDate, debouncedcSearch, setDiasableBtn, setTableData, setLoading, setTotalPage)
    // }

    useEffect(() => {
        setTableData([])
        if (startDate) {

            getHighestAmount(page, perPage, setTableData, setLoading, setTotalPage)
        }

    }, [page, perPage])
    useEffect(() => {
        if (tableData.length > 0) {
            const newTemp = tableData.map((item:ITradeHistory) =>({
                id: item.id,
                result: item.attributes.result,
                drowDown: item.attributes.drowDown,
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