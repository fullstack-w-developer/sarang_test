"use client";
import React from "react";
import dynamic from "next/dynamic";
const ScanComponent = dynamic(()=>import("./ScanComponent"),{ssr:false})
const Scan = () => {
    return <ScanComponent />;
};

export default Scan;
