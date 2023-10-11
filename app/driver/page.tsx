import Menu from "@/components/common/Menu";
import { menuDriver } from "@/helper/utils/data";
import React from "react";
import dynamic from "next/dynamic";
const SectionAdminPage = dynamic(()=>import("./SectionDriverPage"),{ssr:false})
const Driver = async () => {
    return (
        <main>
            <SectionAdminPage />
            <Menu menu={menuDriver} />
        </main>
    );
};

export default Driver;
