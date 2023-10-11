import React from "react";
import dynamic from "next/dynamic";
const CityNumber = dynamic(()=>import("./CityNumber"),{ssr:false})
const Page = async () => {
    return <CityNumber />;
};

export default Page;
