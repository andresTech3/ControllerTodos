import React,{useContext} from 'react'
import styled from "styled-components";

import "../style/_var.css"
import ProviderContext from "../context/todoContext"

const TitleCounter = styled.h2`
  font-size:24px;
  text-align:center;
  margin:0px;
  padding:48px;
  color:var(--colorNaranja);
`


function TodoCounter() {
  const {completedTodos, totalTodos} = useContext(ProviderContext.TodoContext)
  return (
    <>
        <TitleCounter>Has completado {completedTodos} de {totalTodos} Todos</TitleCounter>
    </>
  )
}

export default TodoCounter