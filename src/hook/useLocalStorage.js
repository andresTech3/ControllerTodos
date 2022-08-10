import { useState, useEffect } from "react";

function useLocalStorage(itemsName, initialValue) {
    const [sincronizedItem, setSincronizedItem] = useState(true);
    const [loading, setLoading] = useState(true);
    const [errorLoading, setErrorLoading] = useState(false);
    const [item, setItems] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemsName);
                let parseItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemsName, JSON.stringify(initialValue));
                    parseItem = initialValue;
                } else {
                    parseItem = JSON.parse(localStorageItem);
                }

                setItems(parseItem);
                setLoading(false)
                setSincronizedItem(true);
            } catch (error) {
                setErrorLoading(error);
            }

        }, 3000)
    },[sincronizedItem]);


    const saveItem = (newTodos) => {
        try {
            const stringifiedTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemsName, stringifiedTodos);
            setItems(newTodos);
        } catch (error) {
            setErrorLoading(error);
        }

    }

    const sincronize = () =>{
        setLoading(true);
        setSincronizedItem(false)
    }

    return {
        item,
        saveItem,
        loading,
        errorLoading,
        sincronize,
    };
}

export default useLocalStorage;