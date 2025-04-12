import React from 'react'
import IngredientsList from './IngredientList'

export default function Main() {
  const [ingredients, setIngredients] = React.useState(
    []
  )
 
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input 
          aria-label="Add ingredient" 
          type="text" 
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 &&
        <IngredientsList
          ingredients={ingredients}
        />
      }
    </main>
  )
}