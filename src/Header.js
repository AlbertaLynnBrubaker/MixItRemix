import FirstLetterForm from "./FirstLetterForm";
import MainIngredientForm from "./MainIngredientForm";
import NameForm from "./NameForm";

const Header = ({selectForm}) => {
  // let key = null;
  

  console.log(selectForm)
    
  const handleRenderForm = () => {  
    switch (selectForm) {
      case "cocktailName":
        return <NameForm/>;
      case "firstLetter":
        return <FirstLetterForm/>;
      case "mainIngredient":
        return <MainIngredientForm/>;
    }
  }

  return (
    <header className="main">
      <h1>Mixt It Remix</h1>
      {handleRenderForm()}
    </header>
  )
}

export default Header;