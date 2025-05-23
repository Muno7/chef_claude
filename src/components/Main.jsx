import React from 'react'
import IngredientsList from './IngredientList'
import AiRecipe from './AiRecipe'
import {getRecipeFromMistral} from "../AI"

export default function Main() {
  const [ingredients, setIngredients] = React.useState(
    []
  )

  const [recipe, setRecipe] = React.useState("")
  const recipeSection = React.useRef()

  React.useEffect(() => {
    if (recipe && recipeSection) {
      recipeSection.current.scrollIntoView({behavior:"smooth"})
    }
  },[recipe])

  async function getRecipe() {
      const recipeMarkdown = await getRecipeFromMistral(ingredients)
      setRecipe(recipeMarkdown)
  }
 
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
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      }

      {recipe && <AiRecipe recipe={recipe} />}
    </main>
  )
}