import React from 'react'
import {useStorageListener} from "./useStorageListener";
import styled from "styled-components"

const DepositAlert = styled.div`
    width:100%;
    position:fixed;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgb(0 , 6 , 8, 0.6);
    padding:2em 0px;
    z-index:999;
`

const ParagraphAlert = styled.p`
    font-size:1.3em;
    margin-bottom:1em;
`
const ButtonAlert = styled.button`
    width:15em;
    height:30px;
    border:none;
    font-size:1.1em;
    background:transparent;
    border-bottom:2px solid #08fdd8;
    color:#fff;
    transition:1s;
    &:hover{
        border-bottom:4px solid #08fdd8;
        border-left:2px solid #08fdd8;
        border-right:2px solid #08fdd8;
        font-size:1.2em;
    }
`


function ChangeAlert({sincronizeTodos}){

    const {show, toggleShow} = useStorageListener(sincronizeTodos);

    if(show){
        return (
            <>
                <DepositAlert>
                    <ParagraphAlert>HUBO CAMBIOS!</ParagraphAlert>
                    <ButtonAlert
                    onClick={toggleShow}>
                        Volver a cargar la informacion
                    </ButtonAlert>
                </DepositAlert>
            </>
        )
    }else{
        return null;
    }
}


export {ChangeAlert}