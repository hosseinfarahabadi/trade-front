import Notify from "@/utils/Notify";
import {  ALogin } from "./api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export const login = (
    body: any,
    router:AppRouterInstance,
) => {
    console.log(body)
    ALogin(body).then((res: any) => {
        console.log(res.data.jwt)
        localStorage.setItem("token",res.data.jwt)
        router.push("/smooth")
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
    })
}

