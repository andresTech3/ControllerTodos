import { createContext, useState} from "react";
import useLocalStorage from "../hook/useLocalStorage"

const TodoContext = createContext();

function TodoProvider(props){
    const {
        item : todos,
        saveItem : saveTodos,
        loading,
        errorLoading,
  
    } = useLocalStorage('TODOS_V1', []);
  
    const [search, setSearch] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [comp, setComp] = useState(false);

    // el texto de todos
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length
  
    //el search
    let searchTodos = [];
  
  
    if(!search.length >= 1){
      searchTodos = [...todos];
    }else{
      searchTodos = todos.filter(todo =>{
        const todoText = todo.textTodo.toLowerCase();
        const searchText = search.toLowerCase();
        const checkTodos = todoText.includes(searchText);
        return checkTodos;
      });
    }
  
    
  
    //los todos completed en true
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.textTodo === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = comp;
      setComp(!comp)
      saveTodos(newTodos);
    }
  
    //los todos completed en true
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.textTodo === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed : false,
        textTodo : text,
      });
      saveTodos(newTodos);
    };

    return(
        <TodoContext.Provider value={{ 
            loading,
            errorLoading,
            totalTodos,
            completedTodos,
            searchTodos,
            search,
            setSearch,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

const ProviderContext = {
  TodoProvider,
  TodoContext
}

export default ProviderContext




