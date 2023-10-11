"use client";
import React, { useEffect } from "react";
import VerifyOtp from "./VerifyOtp";
import { useSearchParams } from "next/navigation";
import { successToast } from "@/helper/utils/error";

const Verify = () => {
    const searchParams = useSearchParams()
    useEffect(()=>{
if(searchParams.get("code")){
    successToast(`کد تائید شما ${searchParams.get("code")} می‌باشد`)
}
    },[])
    return <VerifyOtp />;
};

export default Verify;
