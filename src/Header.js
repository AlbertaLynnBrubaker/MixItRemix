import FirstLetterForm from "./FirstLetterForm";
import MainIngredientForm from "./MainIngredientForm";
import RandomCocktail from "./RandomCocktail";
import NameForm from "./NameForm";

const Header = ({onFetchSubmission, toggleNavStatus, selectForm}) => {

  const handleRenderForm = () => {  
    switch (selectForm) {
      case "cocktailName":
        return <NameForm onNameFetchSubmission={onNameFetchSubmission}/>;
      case "firstLetter":
        return <FirstLetterForm onFirstLetterFetchSubmission={onFirstLetterFetchSubmission}/>;
      case "mainIngredient":
        return <MainIngredientForm onMainIngredientFetchSubmission={onMainIngredientFetchSubmission}/>;
      case "randomCocktail":
        return <RandomCocktail onRandomCocktailFetchSubmission={onRandomCocktailFetchSubmission}/>;
    }
  }

  const onNameFetchSubmission = (newSubmission) => {
    onFetchSubmission(newSubmission)
  }

  const onFirstLetterFetchSubmission = (newSubmission) => {
    onFetchSubmission(newSubmission)
  }

  const onMainIngredientFetchSubmission = (newSubmission) => {
    onFetchSubmission(newSubmission)
  }

  const onRandomCocktailFetchSubmission = (newSubmission) => {
    onFetchSubmission(newSubmission)
  }

  return (
    <header className={toggleNavStatus ? "main-sidebar-open" : "main" }>
      <h1>Mixt It Remix</h1>
      {handleRenderForm()}
    </header>
  )
}

export default Header;