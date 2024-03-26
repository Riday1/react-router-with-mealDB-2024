import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleMeal = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb } = meal;

    return (
        <div className='border-4 border-indigo-400 p-2 shadow-lg'>
            <img src={strMealThumb} alt="" />
            <p>{strMeal}</p>
            <button className='border-2 border-indigo-400 px-5 rounded-md shadow-sm'><Link to={`/meal-details/${idMeal}`}>MealDetails</Link></button>
        </div>
    );
};

export default SingleMeal;