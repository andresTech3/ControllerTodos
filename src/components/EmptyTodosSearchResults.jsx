import React from 'react'

import styled from "styled-components"

const TextEmpty = styled.h1`
  text-align:center;
  font-size:4em;
  font-weight:800;
  margin:10px 0px;
  color:${props => props.colorText};
  transition:1s;
  &:hover{
    color:#08fdd8;
  }
`

const DescEmpty = styled.p`
  text-align:center;
  font-size:1.5em;
  opacity:.6;
  font-weight:300;
  margin:10px;
  color:#fff;
`

function EmptyTodosSearchResults(props) {
  return (
    <>
        <TextEmpty colorText = "#f44">¡Lo Siento!</TextEmpty>
        <DescEmpty>No hay resultado para "{props.searchText}" </DescEmpty>
    </>
    
  )
}

export default EmptyTodosSearchResults