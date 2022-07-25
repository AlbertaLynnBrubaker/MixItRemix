import {useState} from "react";
import Header from "./Header"
import Sidebar, {SidebarOpen} from "./Sidebar";

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
  
  return (
    <div className="App">
      <Header selectForm={selectForm}/>
      <Sidebar 
        toggleNavStatus={toggleNavStatus} 
        onSidebarOpen= {handleSidebarOpen}
        onFormSelect= {handleFormSelect}
      />
    </div>
  );
}

export default App;
