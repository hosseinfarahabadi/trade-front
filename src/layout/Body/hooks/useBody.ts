import { useEffect, useState } from "react";
import { getUserInfo } from "../helper/controller";
import { IUserInfo } from "../interface/interfaces";

export default function useBody() {
  const [open, setOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUserInfo>();
useEffect(()=>{
  getUserInfo(setUserInfo)
},[])
console.log(userInfo)
  return {
    open,
    setOpen,
  };
}
