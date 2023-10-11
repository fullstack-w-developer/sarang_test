import { getTrip } from "@/server/user/actions";
import { Trip } from "@/types/Driver/ResponseUserTripQuery";
import React from "react";
import dynamic from "next/dynamic";
const Trips = dynamic(()=>import("./Trips"),{ssr:false})
const Trip = async () => {
    const trips: Trip[] = await getTrip();
    return <Trips trips={trips} />;
};

export default Trip;
