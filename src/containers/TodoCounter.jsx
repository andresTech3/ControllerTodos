import React from 'react'
import styled from "styled-components";

import "../style/_var.css"

const TitleCounter = styled.h2`
  font-size:24px;
  text-align:center;
  margin:0px;
  padding:48px;
  color:var(--colorNaranja);
  opacity :${props => props.loading ? "25%" : "100%"};
`


function TodoCounter({totalTodos, completedTodos,loading}) {
  return (
    <>
        <TitleCounter loading={loading}>Has completado {completedTodos} de {totalTodos} Todos</TitleCounter>
    </>
  )
}

export default TodoCounter