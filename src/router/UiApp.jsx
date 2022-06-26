import React, { useContext } from 'react'

import '../style/App.css';

//import Container
import TodoCounter from "../containers/TodoCounter";
import TodoList from "../containers/TodoList"

//importando componentes
import TodoSearch from "../components/TodoSearch"
import CreateTodoButton from '../components/CreateTodoButton';
import TodoForm from '../components/TodoForm';
import TodoItems from "../components/TodoItems";

import LoadingTodo from '../components/LoadingTodo';
import ErrorLoading from '../components/ErrorLoading';
import EmptyTodos from '../components/EmptyTodos';

//importando portales
import ModalTodo from "../modals/ModalTodo";

//importando nuestro contexto
import ProviderContext from "../context/todoContext"


function UiApp() {

    const {
        loading,
        errorLoading,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = useContext(ProviderContext.TodoContext)

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <LoadingTodo/>}
                {errorLoading && <ErrorLoading errorLoading = {errorLoading}/>}
                {(!loading && !searchTodos.length) && <EmptyTodos/>}

                {searchTodos.map(todo => (
                    <TodoItems
                        key={todo.textTodo}
                        text={todo.textTodo}
                        completed={todo.completed}
                        handleCompleted={() => completeTodo(todo.textTodo)}
                        handleDelete={() => deleteTodo(todo.textTodo)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <ModalTodo>
                    <TodoForm/>
                </ModalTodo>
            )}
            <CreateTodoButton/>
        </>
    )
}

export default UiApp