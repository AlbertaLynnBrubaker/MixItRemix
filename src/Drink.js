

const Drink = ({drink, handleDrinkClick}) => {
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
}

export default Drink