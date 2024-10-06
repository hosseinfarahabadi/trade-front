import Notify from "@/utils/Notify";
import {   Aregister } from "./api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export const registration = (
    body: any,
    router:AppRouterInstance,
    setUser:any
) => {
    console.log("injaaaaaaaaa")
     Aregister(body).then((res: any) => {
        setUser(res.data.user)
        localStorage.setItem("token",res.data.jwt)
        router.push("panel/history")
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
    })
}

