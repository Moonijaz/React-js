import React from 'react'
//import './Game.css'

export default function Game() {
  
  return (
    <div className='main'>
      <div className='header'> Rock, Paper , Scissor Game</div>
      <div className='btn'> 
        <button type='submit'>Rock</button>
        <button type='submit'>Paper</button>
        <button type='submit'> Scissor</button>

        <div> Your Score is : </div>
        <div>Computer Score is :</div>
      </div>

    </div>
  )
}
