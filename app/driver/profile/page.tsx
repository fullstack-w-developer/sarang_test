import React from "react";
import { getDriver } from "@/services/driver";
import dynamic from "next/dynamic";

const Profile = dynamic(()=> import("./Profile"))
const Index = async () => {
    const user = await getDriver()
    return <>
    <Profile user={user}/>
    </>;
};

export default Index;
