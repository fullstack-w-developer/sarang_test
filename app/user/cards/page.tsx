import React from "react";
import { deActiveCard, getCards } from "@/server/user/actions";
import dynamic from "next/dynamic";
const Tabs  = dynamic(()=>import("./Tabs"),{ssr:false})
const Cards = async () => {
    const cards = await getCards();
    return <Tabs deActiveCard={deActiveCard} cards={cards} />;
};

export default Cards;
