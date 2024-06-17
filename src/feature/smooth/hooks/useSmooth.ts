import useDebounce from "@/hooks/useDebounce";
import Notify from "@/utils/Notify";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { getHighestAmount, getHighestAmountExcel } from "../helper/controller";
import { IformData, ITradeHistory, ITradeObject } from "../interfaces";
import { useForm } from "react-hook-form";

export const useSmooth = () => {
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
    const [positionNumber, setPositionNumber] = useState<number>(500);
    
    const [riskToRiward, setRiskToRiward] = useState(2);;
    const [winRate, setWinRate] = useState<number>(50);
    const [initialWallet, setWinitialWallet] = useState<number>(1000);
    const [risk, setRisk] = useState<number>(1);

    // const searchBtnHandler = (selectedPage: number, selectedPerPage: number) => {
    //     getHighestAmount(selectedPage, selectedPerPage, startDate, endDate, debouncedcSearch, setDiasableBtn, setTableData, setLoading, setTotalPage)
    // }
    const methods = useForm<IformData>({
        mode: "onSubmit",
        values: {
            risk: "1", initialWallet: "1000", winRate: "50", riskToRiward: "2", positionNumber:"500"
        }
    });
    const {
        register,
        formState: { errors, isSubmitting },
        reset,
        control,
        setValue,
        watch,
        getValues,
    } = methods
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
const handleSubmit = () => {
    setRisk(Number(getValues("risk")));
    setPositionNumber(Number(getValues("positionNumber")));
    setRiskToRiward(Number(getValues("riskToRiward")));
    setWinitialWallet(Number(getValues("initialWallet")));
    setWinRate(Number(getValues("winRate")));
}
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
        positionNumber,
         setPositionNumber,
         riskToRiward, 
         setRiskToRiward,
         winRate, 
         setWinRate,
         risk, 
         setRisk,
         initialWallet, 
         setWinitialWallet,
         handleSubmit,
         getValues,
         setValue
    }
}