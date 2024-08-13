import { useParams } from 'react-router';
import RecipeCard from '../RecipeCard/RecipeCard';
import '../../utils/spinner.css';
import './CategoryRecipeCardList.css';

export default function CategoryRecipeCardList ({ mealData }) {
  const { category } = useParams();

  function mealDataLoaded() {
    return (
      <>
        <h1 className='label'>{category.toLowerCase()}</h1>
        <ul className='recipe-cards-list'>
          {mealData.map((meal, i) => {
            return <RecipeCard key={i} {...meal}/>
          })}
        </ul>
      </>
    );
  }
  
  return (
    <section className="category-recipe-cards-container">
      {mealData ? (
        mealDataLoaded()
      ) : (
        <div className='spinner-container'>
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      )}
    </section>
  );
}