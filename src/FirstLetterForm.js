import { useEffect, useState } from "react";

const FirstLetterForm = ({onFirstLetterFetchSubmission}) => {
  const [letterDropdown, setLetterDropdown] = useState("A")


  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ]

  const handleLetterSelect  = (e) => {
    setLetterDropdown(() => e.target.value)
  }

  useEffect( () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letterDropdown.toLowerCase()}`)
      .then(r => r.json())
      .then(newSubmission => {
        onFirstLetterFetchSubmission(newSubmission.drinks)
      })
  }, [letterDropdown])

  return(
    <select className='search' value={letterDropdown} id='letter-dropdown' onChange={handleLetterSelect}>
      <option disabled>Choose a Letter</option>
      {alphabet.map(letter => {return <option key={letter} value={letter}>{letter}</option> })}
    </select>
  )
}

export default FirstLetterForm;