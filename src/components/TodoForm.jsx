import React, {useContext, useState} from 'react'

import ProviderContext from '../context/todoContext'

import styled from "styled-components"
import "../style/_var.css"
const Form = styled.form`
    width:90%;
    max-width:300px;
    background_color:var(--colorAzul);
    padding:33px 40px;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
`

const Label = styled.label`
    text-align:center;
    font-weight:bold;
    font-size: 25px;
    color:var(--colorBlanco);
    margin-bottom:26px;
`

const TextArea = styled.textarea`
    background:var(--colorNegro);
    border:2px solid var(--colorNaranja);
    border-radius:2px;
    box-shadow : 0px 5px 50px var(--colorNaranja);
    color:var(--colorBlanco);
    font-size:20px;
    text-align:center;
    padding:12px;
    height:96px;
    width:calc(100% - 25px);

    &:placeholder{
        color:#a5a5a5;
        font-weight:400;
    }

    &:focus{
        outline-color:var(--colorNaranja);
    }
`

const TodoFormButtonContainer = styled.div`
    margin-top:14px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    width:100%;
`



const TodoButtonAdd = styled.button`
    background:var(--colorNaranja)
    color:#222;
    box-shadow : 0px 5px 25px var(--colorNaranja);
`

const TodoButtonCancel = styled.button`
    background:transparent;
    color:var(--colorBlanco);
`


function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('')

    const {addTodo, setOpenModal} = useContext(ProviderContext.TodoContext)

    const handleChange = (e) =>{
        const {value} = e.target
        setNewTodoValue(value)
    }

    const handleCancelar = (e) =>{
        setOpenModal(false)
    }

    const handleAñadir = (e) =>{
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    return (
        <Form onSubmit={handleAñadir}>
            <Label>Ingresa tu nuevo Todo</Label>
            <TextArea
                onChange={handleChange}
                value={newTodoValue}
                placeholder='Ingresa tu todo'
            />
            <TodoFormButtonContainer>
                <TodoButtonCancel className='TodoFormButton' type="button" onClick={handleCancelar}>Cancelar</TodoButtonCancel>
                <TodoButtonAdd className = 'TodoFormButton' type="submit">Añadir</TodoButtonAdd>
            </TodoFormButtonContainer>
        </Form>
    )
}

export default TodoForm