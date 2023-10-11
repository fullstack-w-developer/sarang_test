import React from "react";
import dynamic from "next/dynamic";
import { getUser } from "@/server/user/actions";
const Profile = dynamic(()=>import("./Profile"),{ssr:false})
const InformationUser = async () => {
    const user = await getUser();

    return <Profile user={user} />;
};

export default InformationUser;
