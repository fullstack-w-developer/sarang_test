"use client";
import { User } from "@/types/User";
import React, { useEffect } from "react";
import ProfileInfo from "../common/ProfileInfo";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import useAuthStore from "@/stores/auth-store";
interface Props {
    user: User;
    children: React.ReactNode;
}
const DriverLayout = ({ user, children }: Props) => {
    const pathname = usePathname();
    const isUserPage = pathname === "/driver" || pathname === "/driver/transactions";
    return (
        <>
            {isUserPage && <ProfileInfo user={user} />}
            {children}
        </>
    );
};

export default DriverLayout;
