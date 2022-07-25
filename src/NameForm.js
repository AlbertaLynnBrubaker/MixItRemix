import {useState, useEffect} from "react"

const NameForm = ({onNameFetchSubmission}) => {
  const [nameForm, setNameForm] = useState("");
  const [nameFormSubmit, setNameFormSubmit] = useState("");

  const handleNameFormChange = (e) => {
    setNameForm(() => e.target.value);
  }

  const handleNameFormSubmit = (e) => {
    e.preventDefault();

    setNameFormSubmit(() => nameForm)
  }

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameFormSubmit.toLowerCase()}`)
      .then(r => r.json())
      .then(newSubmission => {
        onNameFetchSubmission(newSubmission)
      })
  },[nameFormSubmit])

  return(
    <form onSubmit={handleNameFormSubmit} className='search' id='search-name'>
      <input onChange={handleNameFormChange} type='text' value={nameForm} name='input' placeholder='Enter Drink Name'/>
      <input type='submit'/>
    </form>
  )
}

export default NameForm;