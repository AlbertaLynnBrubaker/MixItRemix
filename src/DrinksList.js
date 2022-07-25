

const DrinksList = ({onDrinkSelection, drinks}) => {
  console.log(drinks)

  const handleDrinkClick = (e) => {
    onDrinkSelection(e.target.dataset.value)
  }

  const drinksList = drinks.map(drink => {
      return (
        <li 
          key={drink.idDrink}
          onClick={handleDrinkClick} 
          data-value={drink.strDrink} 
          className="drink-list-item"
        >
          <img className="drink-thumb" data-value={drink.strDrink} src={drink.strDrinkThumb} alt= {drink.strDrink}></img>
          <h3 data-value={drink.strDrink}>{drink.strDrink}</h3>
        </li>
      )
  })

  return (
    <>
      {drinks ? <div id="drinks-list">{drinksList}</div> : null}
    </>
  )
}

export default DrinksList;