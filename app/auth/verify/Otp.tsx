"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
interface Props {
    formik: any;
}
const Otp = ({ formik }: Props) => {
    const searchParams = useSearchParams()
    const onChange = (val: string) => {
        formik.setFieldValue("Code", val);
    };
    useEffect(()=>{
        formik.setFieldValue("Code", searchParams.get("code"));
    },[])
    return (
        <div className="mt-5">
            <ReactInputVerificationCode value={formik.values.Code} onChange={onChange} placeholder="" length={4} />
        </div>
    );
};

export default Otp;
