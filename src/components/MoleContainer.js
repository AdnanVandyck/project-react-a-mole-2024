import React, { useState }from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'


const MoleContainer = (props) => {
  let [theMole, setTheMole] = useState(false)

  const handleClick = (e) => {
    props.setScore(props.score + 1);
    setTheMole(false);
  }

  return (
    <div>
      {theMole ? (
        <Mole
        setScore={props.setScore}
        toggle={setTheMole}
        handleClick={handleClick} 
        />
      ) : (<EmptySlot toggle={setTheMole}/>)}
    </div>
  )
}

export default MoleContainer