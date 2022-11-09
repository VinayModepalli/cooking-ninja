import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

import { projectFirestore } from '../../firebase/config'

import './Recipe.css'

export default function Recipe() {
  const { mode } = useTheme()
  const {id} = useParams()
  
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)
    
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if (doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      }else{
        setIsPending(false)
        setError('could not find that recipe')
      }
    })
  }, [id])
  
  
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading..</p>}
      {recipe && (
        <>
          <h1 className='page-title'>{recipe.title}</h1>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='methond'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}
