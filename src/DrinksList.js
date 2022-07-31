import Drink from "./Drink"

const DrinksList = ({onDrinkSelection, drinks}) => {

  const handleDrinkClick = (e) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.dataset.value.toLowerCase()}`)
      .then(r => r.json())
      .then(drinkSelection => onDrinkSelection(drinkSelection.drinks[0]))
  }

  const drinksList = drinks.map(drink => {
      return <Drink key={drink.IdDrink} drink={drink} handleDrinkClick={handleDrinkClick} />
  })

  
  return (
    <>
      {drinks.length ? <div id="drink-list" style={{display: 'block'}}>{drinksList}</div> : null}
    </>
  )
}

export default DrinksList;
