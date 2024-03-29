import React, { useEffect } from 'react'
import moleImg from '../mole.png'

function Mole(props) {

  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 10000)
    let timer = setTimeout(() => {
      props.toggle(false)
    }, randSeconds)
    return () => clearTimeout(timer)
  }, [props.toggle])
  return (
    <div>
      <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} alt={"mole-img"}/>
    </div>
  )
}

export default Mole