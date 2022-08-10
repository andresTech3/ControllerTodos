import React,{useState} from 'react'

function useStorageListener(sincronizeTodos){

        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener("storage", (change)=>{
            if(change.key === "TODOS_V1"){
                console.log("hubo cambio en ", change.key)
                setStorageChange(true)
            }
        });

        const toggleShow = () =>{
            setStorageChange(false);
            sincronizeTodos();
        }

        return{
            show : storageChange ,
            toggleShow : toggleShow
        }
    
}

export {useStorageListener}