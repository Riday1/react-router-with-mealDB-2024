import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import MealsCategory from './components/MealsCategory/MealsCategory';
import MealsByCategory from './MealsByCategory/MealsByCategory';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        {
          path: '/meals-category',
          loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
          element: <MealsCategory></MealsCategory>
        },
        {
          path: '/meals/category/:mealCategory',
          loader: async ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.mealCategory}`),
          element: <MealsByCategory></MealsByCategory>
        }


      ]
    },
    { path: '*', element: <div>404 not found</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
