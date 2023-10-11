import CardTransaction from "@/components/common/CardTransaction";
import Menu from "@/components/common/Menu";
import { menuDriver } from "@/helper/utils/data";
import { getTrasactions } from "@/server/common/action";
import { Transaction } from "@/types/User";
import React from "react";

const Transactions = async () => {
    const transactions: Transaction[] = await getTrasactions();
    return (
        <>
            <div className="w-90 flex flex-col gap-5 mt-10 pb-20">
                {Array.isArray(transactions) ? transactions.map((transaction, index) => (
                    <CardTransaction transaction={transaction} key={index} />
                ))
                    : <p className="text-center font-artin-bold">تراکنشی یافت نشد </p>
                }
            </div>
            <Menu menu={menuDriver} />
        </>
    );
};

export default Transactions;
