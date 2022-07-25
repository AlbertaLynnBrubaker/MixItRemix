import {useState} from "react";
import Header from "./Header"
import Sidebar from "./Sidebar";

import './App.css';

function App() {
  const [toggleNavStatus, setToggleNavStatus] = useState(false);
  const [selectForm, setSelectForm] = useState("");

  const handleSidebarOpen = () => {
    setToggleNavStatus(() => !toggleNavStatus);
  }

  const handleFormSelect = (e) => {
    setSelectForm(() => e.target.name)
  }

  const handleFetchSubmission = (newSubmission) => {
    console.log(newSubmission)
  }
  
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
    </div>
  );
}

export default App;
