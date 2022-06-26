import React from 'react'
import "../style/loading.css"

import logoAndresTech from '../img/AndresTech.png'

function LoadingTodo() {
  return (
    <div className='loadingContent'>
        <img src={logoAndresTech} alt="" />
        <p>Cargando todos tus Todos!!</p>
    </div>
  )
}

export default LoadingTodo