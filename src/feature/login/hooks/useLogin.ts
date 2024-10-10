
import { useEffect, useState } from "react";
import { IformData, ITradeHistory, ITradeObject } from "../interfaces";
import { useForm } from "react-hook-form";
import { login } from "../helper/controller";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user";

export const useLogin = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false)
    const [token, setToken] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const setUser = useUserStore((state) => state.setUser);

    
    const methods = useForm<IformData>({
        mode: "onSubmit",
        values: {
            identifier : "", password: ""
        }
    });
    const onLoginHandler = () => {
        const body = {
            identifier : watch("identifier"),
            password : watch("password")
        };
        login(body,router,setUser);
    }
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

    // useEffect(() => {
        

    // }, [tableData])

    return {
        onLoginHandler,
        setValue,
        watch,
        getValues,
        token,
        handleSubmit,
        errors,
        register,
        showPassword, 
        setShowPassword,

    }
}