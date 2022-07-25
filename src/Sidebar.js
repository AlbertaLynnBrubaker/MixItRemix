
const SidebarOpen = ({onFormSelect}) => {

  const handleOpenFormClick = (e) => {
    onFormSelect(e);
  }

  return (
    <ul>
      <li><span>Search By:</span></li>
      <li><button
        onClick={handleOpenFormClick}
        id='cocktail-name'
        name="cocktailName"
        >Cocktail Name
      </button></li>
      <li><button
        onClick={handleOpenFormClick}
        id='first-letter'
        name="firstLetter"
        >First Letter of Cocktail
      </button></li>
      <li><button
        onClick={handleOpenFormClick}
        id='main-ingredient'
        name="mainIngredient"
        >Drink Ingredient
      </button></li>
      <li><button
        onClick={handleOpenFormClick}
        id='random-cocktail'
        name="randomCocktail"
        >Random Cocktail
      </button></li>
    </ul>
  )
}

const Sidebar = ({onFormSelect, toggleNavStatus, onSidebarOpen}) => {
  

  function toggleNav(e) {
    onSidebarOpen();
  }
  
  return (
    <>
      <div 
        onClick={toggleNav} 
        className= {toggleNavStatus ? "btn-toggle-nav-open": "btn-toggle-nav-closed"}
      >
      </div>
      <nav className={toggleNavStatus ? "sidebar-open" : "sidebar-closed"} >
        {toggleNavStatus ? <SidebarOpen onFormSelect={onFormSelect}/> : null}
      </nav>
    </>
  )
}

export default Sidebar;
export {SidebarOpen};