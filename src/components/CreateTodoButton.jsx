import React from 'react'
import "../style/_var.css"
import styled from "styled-components"




const CreateButton = styled.button`
  background:var(--colorNaranja);
  color:var(--colorBlanco);
  box-shadow : 0px 5px 25px var(--colorNaranja);
  border-radius:50%;
  border:none;
  cursor:pointer;
  font-size:50px;
  display:flex;
  position:fixed;
  bottom:24px;
  right:24px;
  font-weight:bold;
  transition:1s ease-in;
  align-items: center;
  height:64px;
  width:64px;
  transform:rotate(0);
  transition:.3s ease;
  z-index:999;
  &:hover{
    transform:rotate(224deg);
  }
`
const TitleButton = styled.span`
  display:flex;
  margin:auto;
  cursor:pointer;
`



function CreateTodoButton({setOpenModal, openModal}) {
  const handleButton = () => {
    setOpenModal(!openModal)
  };

  return (
    <>
        <CreateButton onClick={handleButton}><TitleButton>+</TitleButton></CreateButton>
    </>
  )
}

export default CreateTodoButton