import React, {useState} from 'react'
import "../style/_var.css"
import styled from "styled-components"

import { FaTrashAlt, FaCheck } from "react-icons/fa";




const ContainerTodoItems = styled.li`
  position:relative;
  width:94%;
  padding:1em;
  margin: 1em auto;
  box-shadow: 0px 0px 15px 0px var(--colorAzul);
  display:flex;
  align-items: center;
  justify-content:space-between;
`
const IconCheck = styled.span`
  width:1.3em;
  font-size:2em;
  height:30px;
  border-radius:50%;
  cursor:pointer;
`

const ParagraphItem = styled.p`
  text-decoration:${props => props.subRayado ? "line-through" : "none" };
  font-size:1.3em;
  font-weight:bold;
`

const IconDelete = styled.span`
  font-size:2em;
  position:absolute;
  top:-10px;
  right:10px;
  &:hover{
    color:var(--colorNaranja);
    cursor:pointer;
  }
`

function TodoItems(props) {

  return (
    <>
        <ContainerTodoItems>
          <IconCheck onClick={props.handleCompleted}>
            {props.completed ? <FaCheck style={{color: "#2d5"}}/> : <FaCheck/>}
          </IconCheck>
          <ParagraphItem subRayado = {props.completed}>
            {props.text}
          </ParagraphItem>
          <div>
            <IconDelete>
                <FaTrashAlt onClick={props.handleDelete}/>
            </IconDelete>
          </div>
        </ContainerTodoItems>
    </>
  )
}

export default TodoItems