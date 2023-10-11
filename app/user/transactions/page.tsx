import CardTransaction from "@/components/common/CardTransaction";
import { getTrasactions } from "@/server/counter/action";
import { Transaction } from "@/types/User";
import React from "react";

const Transactions = async () => {
    const transactions:{data:{Transactions:Transaction[]}} = await getTrasactions();
    return (
        <>
            <div className="w-90 flex flex-col gap-5 mt-10 pb-20">
                {transactions.data.Transactions.map((transaction, index) => (
                    <CardTransaction transaction={transaction} key={index} />
                ))}
            </div>
        </>
    );
};

export default Transactions;
