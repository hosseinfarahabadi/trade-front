import useDebounce from "@/hooks/useDebounce";
import Notify from "@/utils/Notify";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import {  getTradeHistory, setTradeHistory } from "../helper/controller";
import { IformData, ITradeHistory, ITradeObject } from "../interfaces";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const useTradeList = () => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [tableData, setTableData] = useState<ITradeHistory[]>([])
    const [tradeObject, setTradeObject] = useState<ITradeObject[]>([])

    const [search, setSearch] = useState<string>("");
    const debouncedcSearch = useDebounce<string>(search, 1000);

    const methods = useForm<IformData>({
        mode: "onSubmit",
        values: {
            volume : "",
             result: "",
              stop:"",
            takeProfit:"",
            RR:"",
            sign:"",
            buySell:"",
            drowDown:"",
        }
    });
    const {
        register,
        formState: { errors, isSubmitting },
        reset,
        control,
        setValue,
        watch,
        handleSubmit,
        getValues,
    } = methods

    const onAddTrade = () => {
        const body = {
            data :{

                volume: watch("volume"),
                result: watch("result"),
                stop: watch("stop"),
                takeProfit: watch("takeProfit"),
                RR: watch("RR"),
                sign: watch("sign"),
                buySell: watch("buySell"),
                drowDown: watch("drowDown"),
            }
            
        };
        setTradeHistory(body,setLoading);
    }

    useEffect(() => {
        
        getTradeHistory(setTableData, setLoading)

    }, [])
    useEffect(() => {
        if (Array.isArray(tableData)&&tableData.length > 0) {
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
        router,
        setValue,
        watch,
        getValues,
        handleSubmit,
        reset,
        onAddTrade
    }
}