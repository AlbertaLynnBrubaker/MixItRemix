import {useEffect} from "react"

const RandomCocktail = ({onRandomCocktailFetchSubmission}) => {

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(r => r.json())
      .then(newSubmission => {
        onRandomCocktailFetchSubmission(newSubmission.drinks)
      })
  },[])

  return (
    <></>
  )
}

export default RandomCocktail;