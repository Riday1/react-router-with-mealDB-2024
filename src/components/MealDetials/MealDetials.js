import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetials = () => {
    const mealDetailData = useLoaderData();
    console.log(mealDetailData)

    return (
        <div className='mt-40 '>
            <h1>Meal Details</h1>
            {/* you can put all details data and add some style which you want to see in your UI */}
        </div>
    );
};

export default MealDetials;