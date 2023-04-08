import React from 'react'

import "./ResetButton.css"

export const ResetButton = ({resetBoard}) => {
  return (
    <div className='resetbutton'>
      <button onClick={resetBoard} >RESET</button>
    </div>
  )
}


