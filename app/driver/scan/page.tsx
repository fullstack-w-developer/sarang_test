"use client";
import dynamic from "next/dynamic";
import React from "react";
const ScanComponent = dynamic(()=>import("@/app/user/scan/ScanComponent"),{ssr:false})
const Scan = () => {
    return <ScanComponent />;
};

export default Scan;
