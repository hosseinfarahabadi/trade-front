import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { meData } from "../helpers/controller";
import { IMeData } from "../interface";
import { useRouter } from "next/navigation";

export const useNavbarComponent = () => {
  const date = new DateObject({ calendar: persian, locale: persian_fa });
  const router = useRouter();
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : "";
  // if (access && router) {
  //   redaxios
  //     .get(`https://bss.asiatech.cloud/api/admin/users/permissions`, {
  //       headers: {
  //         authorization: `Bearer ` + access,
  //       },
  //     })
  //     .then((response: TResponse<any>) => {
  //       if (access) {
  //         FetchApi.setToken(access);
  //       } else {
  //         router.push("/login");
  //       }
  //     })
  //     .catch(() => {
  //       router.push("/login");
  //     });
  // }
  useEffect(() => {
    if (token && router) {
     
    }else{
      router.push("/login");

    }
  }, [token, router]);
  const [personalData, setPersonalData] = useState<IMeData>();
  // useEffect(() => {
  //   meData(setPersonalData);
  // }, []);

  return {
    personalData,
    setPersonalData,
    date,
  };
};
