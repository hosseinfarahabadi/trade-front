
import { useEffect, useState } from "react";
import { IformData, ITradeHistory, ITradeObject } from "../interfaces";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user";
import { registration } from "../helper/controller";

export const useRegister = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false)
    const [token, setToken] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const setUser = useUserStore((state) => state.setUser);

    
    const methods = useForm<IformData>({
        mode: "onSubmit",
        values: {
            name : "", password: "", email:"",username:""
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

    const onRegisterHandler = () => {
        const body = {
            
                name: watch("name"),
                password: watch("password"),
                email: watch("email"),
                username: watch("username")
            
        };
        registration(body,router,setUser);
    }


    return {
        onRegisterHandler,
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