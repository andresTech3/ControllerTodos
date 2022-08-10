import '../style/App.css';

//import Container

import TodoList from "../containers/TodoList"
import TodoHeader from '../containers/TodoHeader';
import TodoCounter from '../containers/TodoCounter';

//importando componentes
import TodoSearch from '../components/TodoSearch';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoForm from '../components/TodoForm';
import TodoItems from "../components/TodoItems";

import LoadingTodo from '../components/LoadingTodo';
import ErrorLoading from '../components/ErrorLoading';
import EmptyTodos from '../components/EmptyTodos';
import EmptyTodosSearchResults from '../components/EmptyTodosSearchResults';
import {ChangeAlert} from '../components/ChangeAlert';

//importando portales
import ModalTodo from "../modals/ModalTodo";

//import hook
import useTodos from "../hook/useTodos"


function App() {
  const {
    loading,
    errorLoading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    completedTodos,
    totalTodos,
    search,
    setSearch,
    addTodo,
    setOpenModal,
    sincronizeTodos
  } = useTodos();

  return (
    <>
      <TodoHeader  loading = {loading}>
        
          <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            // loading={loading}
          />

          <TodoSearch
            search={search}
            setSearch={setSearch}
            // loading={loading}
          />
        
      </TodoHeader>

      <TodoList
        error={errorLoading}
        loading={loading}
        searchTodos={searchTodos}
        totalTodos={totalTodos}
        search={search}

        onError={() => <ErrorLoading />}
        onLoading={() => <LoadingTodo />}
        onEmpty={() => <EmptyTodos />}
        onEmptySearchResults={() => <EmptyTodosSearchResults searchText={search} />}
      // render={todo => (
      //   <TodoItems
      //     key={todo.textTodo}
      //     text={todo.textTodo}
      //     completed={todo.completed}
      //     handleCompleted={() => completeTodo(todo.textTodo)}
      //     handleDelete={() => deleteTodo(todo.textTodo)}
      //   />
      // )}
      >
        {todo => (
            <TodoItems
              key={todo.textTodo}
              text={todo.textTodo}
              completed={todo.completed}
              handleCompleted={() => completeTodo(todo.textTodo)}
              handleDelete={() => deleteTodo(todo.textTodo)}
            />
          )
        }
      </TodoList>

      {!!openModal && (
        <ModalTodo>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </ModalTodo>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

      <ChangeAlert sincronizeTodos = {sincronizeTodos}/>
    </>
  )
}

export default App;
