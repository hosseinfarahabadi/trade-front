import Notify from "@/utils/Notify";
import {  AgetUserInfo } from "./api";



export const getUserInfo = ( setUserInfo: Function) => {
    AgetUserInfo().then((res: any) => {
        console.log(res.data)
        setUserInfo(res.data)
    }).catch((err: any) => {
        console.log(err);
        Notify.error(err.data.error.message);
    })
}