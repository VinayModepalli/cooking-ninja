import {Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import TrashCan from '../assets/trashcan.svg'
import {projectFirestore} from '../firebase/config'

import './RecipeList.css'

export default function RecipeList( {recipes} ) {
  const { mode } = useTheme()

  if (recipes.length === 0){
    return <div className='error'>No recipes to show...</div>
  }

  const handleClick = id => {
    projectFirestore.collection('recipes').doc(id).delete()
  }
  return (
    <div className='recipe-list'>
        {recipes.map( recipe => (
        <div className={`card ${mode}`} key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime}</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
            <img
              src={TrashCan}
              alt='Trash Can'
              className='delete'
              onClick={() => handleClick(recipe.id)}
            />
        </div>
      ))}
    </div>
  )
}
