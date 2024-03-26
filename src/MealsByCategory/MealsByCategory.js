import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealDetials from '../components/MealDetials/MealDetials';
import SingleMeal from '../components/SingleMeal/SingleMeal';

const MealsByCategory = () => {
    const mealsListCategoryWise = useLoaderData().meals;
    console.log(mealsListCategoryWise)
    return (
        <div>
            <h1>Meals  by categories</h1>
            <div className='grid grid-cols-3 gap-4 mt-20'>
                {
                    mealsListCategoryWise.map((meal, idx) => <SingleMeal key={idx} meal={meal}></SingleMeal>)
                }
            </div>
        </div>
    );
};

export default MealsByCategory;