import Menu from "@/components/common/Menu";
import { menuDriver } from "@/helper/utils/data";
import { getTrasactions } from "@/server/common/action";
import { Transaction } from "@/types/User";
import dynamic from "next/dynamic";
import React from "react";
const CardTransaction = dynamic(()=> import("@/components/common/CardTransaction"),{ssr:false})
const Transactions = async () => {
    const transactions:{Transactions:Transaction[]}  = await getTrasactions();
    return (
        <>
               <div className="w-90 flex flex-col gap-5 mt-10 pb-20">
                {Array.isArray(transactions.Transactions)?transactions.Transactions.map((transaction, index) => (
                    <CardTransaction transaction={transaction} key={index} />
                ))
                :<p className="text-center font-artin-bold">تراکنشی یافت نشد </p>
            }
            </div>
            <Menu menu={menuDriver} />
        </>
    );
};

export default Transactions;
