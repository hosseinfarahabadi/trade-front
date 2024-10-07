"use client";

import { TradeList } from "@/feature/history";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  // if (typeof window !== "undefined") router.push("/login");
  useEffect(() => {
    const access =
      typeof window !== "undefined" ? window.localStorage.getItem("token") : "";
    if (!access) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {typeof window !== "undefined" && window.localStorage.getItem("token") ? (
        <TradeList />
      ) : (
        ""
      )}
    </>
  );
}
