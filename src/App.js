import {useState} from "react";
import Header from "./Header"
import Sidebar from "./Sidebar";
import DrinksList from "./DrinksList";
import DrinkDetails from "./DrinkDetails";

import './App.css';

function App() {
  const [toggleNavStatus, setToggleNavStatus] = useState(false);
  const [selectForm, setSelectForm] = useState("");
  const [submission, setSubmission] = useState([])
  const [drinkSelection, setDrinkSelection] = useState("")

  const handleSidebarOpen = () => {
    setToggleNavStatus(() => !toggleNavStatus);
  }

  const handleFormSelect = (e) => {
    setSelectForm(() => e.target.name)
  }

  const handleFetchSubmission = (newSubmission) => {
    setSubmission(() => newSubmission)
  }

  const handleDrinkSelection = (drink) => {
    return (
      setDrinkSelection(() => drink)
    )
  }


  console.log(drinkSelection)
  return (
    <div className="App">
      <Header 
        toggleNavStatus={toggleNavStatus} 
        selectForm={selectForm}
        onFetchSubmission={handleFetchSubmission}
      />
      <Sidebar 
        toggleNavStatus={toggleNavStatus} 
        onSidebarOpen= {handleSidebarOpen}
        onFormSelect= {handleFormSelect}
      />
      <div id={toggleNavStatus ? "drinks-container-sidebar-open" :"drinks-container"}>
        <DrinksList 
          onDrinkSelection={handleDrinkSelection} 
          drinks={submission}
        />
      </div>
    </div>
  );
}

export default App;
