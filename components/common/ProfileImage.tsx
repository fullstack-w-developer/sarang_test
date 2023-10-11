import Image from "next/image";
import React from "react";
import {FcBusinessman, FcBusinesswoman} from "react-icons/fc"
import { User } from "@/types/User";
const ProfileImage = ({user}:{user:User}) => {
    console.log(user)
    return (
        <div className="bg-orange rounded-full w-16 h-16 flex justify-center items-center">
            
        {user.Sex === "مرد" ?<FcBusinessman size={36}/>:<FcBusinesswoman size={36}/>}
        </div>
    );
};

export default ProfileImage;
