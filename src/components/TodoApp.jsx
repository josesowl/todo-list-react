import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

    const { todos, todosCounter, pendingCounter, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>Todo App: { todosCounter } <small> pendientes: { pendingCounter } </small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo} onToggleTodo={ handleToggleTodo } />
  
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={ handleNewTodo }/>

                </div>

            </div>

            
        </>
    )
}
