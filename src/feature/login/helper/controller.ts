import Notify from "@/utils/Notify";
import {  ALogin } from "./api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export const login = (
    body: any,
    router:AppRouterInstance,
    setUser:any

) => {
    console.log(body)
     ALogin(body).then((res: any) => {
        console.log(res.data)
        localStorage.setItem("token",res.data.jwt)
        setUser(res.data.user)
        router.push("panel/history")
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
    })
}

// export const login = async (
//     body: any,
//     router: AppRouterInstance,
// ) => {
//     try {
//         console.log(body);

//         // Await the API call to get the response
//         const res = await ALogin(body);
//         console.log(res.data.jwt);

//         // Store token in localStorage
//         localStorage.setItem("token", res.data.jwt);

//         // Ensure localStorage has saved the token
//         await new Promise(resolve => setTimeout(resolve, 0));

//         // Redirect after token is stored
//         router.push("/history");
//     } catch (err: any) {
//         // Handle errors and display the error message
//         Notify.error(err?.data?.error?.message || "An error occurred during login");
//     }
// };
