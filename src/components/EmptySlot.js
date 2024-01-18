import React, { useEffect } from 'react'
import MoleHill from '../molehill.png'

const EmptySlot = (props) => {

  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000)
    let timer = setTimeout(() => {
      props.toggle(true)
    }, randSeconds)
    return () => clearTimeout(timer)
  })
  return (
    <div>
      <img style={{'width': '30vw'}} src={MoleHill} alt={'Mole-Hill'}/>
    </div>
  )
}

export default EmptySlot