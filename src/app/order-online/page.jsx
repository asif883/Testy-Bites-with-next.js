import React from 'react';
import OrderBanner from '../Components/OrderOnline/OrderSectionBanner';
import FoodOrder from '../Components/OrderOnline/FoodOrder';

const page = () => {
    return (
        <div>
            <OrderBanner/>
            <FoodOrder/>
        </div>
    );
};

export default page;