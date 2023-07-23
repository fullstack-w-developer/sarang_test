"use client";
import React from 'react'
import ProfileImage from './ProfileImage'
import Link from 'next/link'
import { Edit_iocn, Wallet_icon } from '../icons/icons'
import { toFarsiNumber } from '@/helper/utils/toFarsiNumber'
import useAuthStore from '@/stores/auth-store'

const InfoUser = () => {
    const { user } = useAuthStore()
    return (
        <div className="border-b border-gray-200 pb-5">
            <div className="py-6 h-full  flex justify-between items-center">
                <div className="flex items-center gap-1 ">
                    <ProfileImage />
                    <div>
                        <p className="font-artin-bold text-xl">
                            {user?.FirstName} {user?.LastName}
                        </p>
                        <p className="font-artin-regular text-[#626262]">{toFarsiNumber(user?.Phone!)}</p>
                    </div>
                </div>
                {(
                    <Link href="/user/profile/edit">
                        {" "}
                        <Edit_iocn />
                    </Link>
                )}
            </div>
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2">
                    <Wallet_icon fill="#F57D0E" />
                    <p className="font-artin-regular text-[#626262]">موجودی کیف پول شما</p>
                </div>
                <p className="font-artin-bold text-orange text-xl">
                    {user?.Balance?.toLocaleString()} <span className="text-[#626262] text-sm">تومان</span>
                </p>
            </div>
        </div>
    )
}

export default InfoUser