import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MealsCategory = () => {
    const mealCategories = useLoaderData().categories;

    // console.log(mealCategories)
    return (
        <div>
            <h1>Meals Categorys :{ } </h1>
            <div>
                {
                    mealCategories.map((category, idx) => <p key={idx}><Link to={`/meals/category/${category.strCategory}`}>{category.strCategory}</Link></p>)
                }
            </div>
        </div>
    );
};



export default MealsCategory;