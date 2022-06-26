import React from 'react'
import "../style/_var.css"
import styled from "styled-components"

const LinkUl = styled.ul`
  margin:0px;
  padding:0px 0px 56px 0px;
  list-style:none;
`

function TodoList({children}) {
  return (
    <>
        <section>
          <LinkUl>
              {children}
          </LinkUl>
        </section>
    </>
  )
}

export default TodoList