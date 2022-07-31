import {useState} from "react"

const MainIngredientForm = ({onMainIngredientFetchSubmission}) => {
  const [ingredientForm, setIngredientForm] = useState("");

  const handleIngredientFormChange = (e) => {
    setIngredientForm(() => e.target.value);
  }

  const handleIngredientFormSubmit = (e) => {
    e.preventDefault();

    getFormSubmission()
  }

  const getFormSubmission = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientForm.toLowerCase()}`)
      .then(r => r.json())
      .then(newSubmission => {
        onMainIngredientFetchSubmission(newSubmission.drinks);
      })
  }

  return(
    <form 
      onSubmit={handleIngredientFormSubmit} 
      className='search' 
      id='search-ingredient'
    >
    <input 
      onChange={handleIngredientFormChange} 
      type='text' 
      value={ingredientForm} 
      name='input' 
      placeholder='Enter Drink Ingredient'
    />
      <input type='submit'/>
    </form>
  )
}

export default MainIngredientForm;