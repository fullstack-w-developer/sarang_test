import { getTrip } from "@/server/user/actions";
import { Trip } from "@/types/Driver/ResponseUserTripQuery";
import React from "react";
import Trips from "./Trips";

const Trip = async () => {
    const trips: Trip[] = await getTrip();
    console.log(trips,"kdkdkkddk")
    return <Trips trips={trips} />
};

export default Trip;
