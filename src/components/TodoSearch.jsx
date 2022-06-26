import React,{useContext} from 'react'

import { FaSearch } from "react-icons/fa";
import "../style/_var.css"
import styled from "styled-components"

import ProviderContext from "../context/todoContext"




const Input_search = styled.input`
  background:var(--colorNaranja);
  padding: 0px 1em;
  border-radius:2px;
  border:none;
  margin:0px 24px;
  height:64px;
  width:calc(100% - 62px);
  font-size:24px;
  font-weight:400;
  color:--colorBlanco;
  box-shadow : 0px 5px 50px var(--colorNaranja) ;
  margin-bottom:20px;
  outline:none;
  &:placeholder{
    color:#a5a5a5;
    font-weight:400;
  }

`

const ContainerSearch = styled.div`
  display:flex;
  position:relative;
  align-items: center;
  
`
const styledSeacrch =  {
  position:"absolute",
  right: "6%",
  top:"20px",
  fontSize:"25px",
  fontWeight:400,
}



function TodoSearch() {

  const {search, setSearch} = useContext(ProviderContext.TodoContext)

  const handleChangeSearch = (e) =>{
    setSearch(e.target.value)
  }

  return [
      <ContainerSearch>
        <Input_search
        onChange={handleChangeSearch}
        type="text" 
        placeholder='Busca el Todo deseado'
        value={search}
        />
        <FaSearch style={styledSeacrch}/>
      </ContainerSearch>
  ]
}

export default TodoSearch