

const DrinkDetails = ({drinkSelection}) => {

  const getDrinkIngredients = () => {
    const drinkIngredients = [];
    let ingredientString;
    for (let i = 1; i < 16 ; i++) {
      if(drinkSelection[`strIngredient${i}`] === null) {
          break;
      } else if (drinkSelection[`strMeasure${i}`] === null) {
        ingredientString = drinkSelection[`strIngredient${i}`];
      } else {
        ingredientString = drinkSelection[`strMeasure${i}`] + ' ' + drinkSelection[`strIngredient${i}`];
      }
      drinkIngredients.push(ingredientString);
    }
    return drinkIngredients
  }

  return (
    <div id="drink-details">
      <h3>{drinkSelection.strDrink}</h3>
      <img 
        className="detail-image" 
        src={drinkSelection.strDrinkThumb} 
        alt={drinkSelection.strDrink} 
      />
      <h4>Glass:</h4>
      <p>{drinkSelection.strGlass}</p>
      <h4>Ingredients:</h4>
      <ul>
        {getDrinkIngredients().map(ingredient => {
    return (
      <li key={ingredient}>{ingredient}</li>
    )
  })}
      </ul>
      <h4>Instructions:</h4>
      <p>{drinkSelection.strInstructions}</p>
    </div>
  )
}

export default DrinkDetails;