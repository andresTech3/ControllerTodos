import React from 'react'
import "../style/_var.css"
import styled from "styled-components"

const LinkUl = styled.ul`
  margin:0px;
  padding:0px 0px 56px 0px;
  list-style:none;
`

function TodoList(props) {

  const renderFunc = props.children || props.render

  return (
    <>
        <section>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmpty()}
        {(!!props.totalTodos && !props.searchTodos.length) && props.onEmptySearchResults(props.searchText)}
        { (!props.loading && !props.error) && props.searchTodos.map(renderFunc)}

          <LinkUl>
              {props.children}
          </LinkUl>
        </section>
    </>
  )
}

export default TodoList