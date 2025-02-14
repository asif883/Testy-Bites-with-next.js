"use client"
import React from 'react';
import ReservationBanner from '../Components/ReservationPage/ReservationBanner';
import TableBooking from '../Components/ReservationPage/TableBooking';
import TableCategory from '../Components/ReservationPage/TableCategory';

const page = () => {
    return (
        <div>
            <ReservationBanner/>
            <TableBooking/>
            <TableCategory/>
        </div>
    );
};

export default page;