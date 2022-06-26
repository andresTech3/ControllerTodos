import { useState, useEffect } from "react";

function useLocalStorage(itemsName, initialValue) {
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
            } catch (error) {
                setErrorLoading(error);
            }

        }, 5000)
    })


    const saveItem = (newTodos) => {
        try {
            const stringifiedTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemsName, stringifiedTodos);
            setItems(newTodos);
        } catch (error) {
            setErrorLoading(error);
        }

    }

    return {
        item,
        saveItem,
        loading,
        errorLoading,
    };
}

export default useLocalStorage;