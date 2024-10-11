import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import {  deleteHandler, getJournals, setJournals, updateHandler } from "../helper/controller";
import { IformData, IJournal, ITradeObject } from "../interfaces";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


export const useJournalList = () => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [tadeID, setTadeID] = useState<string>("")
    const [edit, setEdit] = useState<boolean>(false)
    const [tableData, setTableData] = useState<IJournal[]>([])
    const [selectedTrade, setSelectedTrade] = useState<IJournal>()

    const [search, setSearch] = useState<string>("");
    const debouncedcSearch = useDebounce<string>(search, 1000);

    const methods = useForm<IformData>({
        mode: "onSubmit",
        values: {
            name : "",
            createdAt: "w",
            updatedAt:"",
            publishedAt:"",
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
                name: watch("name"),
            }
            
        };
        setJournals(body,setLoading, setTableData);
    }
    const onUpdateHandler = () => {
        const body = {
            data :{
                name: watch("name"),
            }
            
        };
        console.log(body)
        updateHandler(tadeID,body,setLoading, setTableData);
    }
    const onDeleteHandler = () => {
        deleteHandler(tadeID,setLoading, setTableData);
    }

    useEffect(() => {
        
        getJournals(setTableData, setLoading)

    }, [])

console.log(tableData)
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
        router,
        setValue,
        watch,
        getValues,
        handleSubmit,
        reset,
        onAddTrade,
        errors,
        onDeleteHandler,
        setTadeID,
        onUpdateHandler,
        edit, 
        setEdit,
        selectedTrade,
         setSelectedTrade
    }
}