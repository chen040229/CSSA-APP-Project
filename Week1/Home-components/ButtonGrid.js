import React from 'react'
import '../../styles/ButtonGrid.css'; 

function ButtonGrid({ maxValue, setSelectedNumber}) {
  return (
    <div className='button-grid'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
        number <= maxValue ? (
          <button key={number} onClick={() => setSelectedNumber(number)} className={`button ${number} ${number > maxValue ? 'hidden' : ''}` }>
            {number}
          </button>
        ) : null
      ))}
    </div>
  )
}

export default ButtonGrid