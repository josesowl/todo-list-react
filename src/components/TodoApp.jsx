import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

    const { todos, todosCounter, pendingCounter, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <div className="title">
                <h1>Tasks to do: { todosCounter } </h1>                
                <h1><small> You have { pendingCounter }: pending to review </small></h1>
                <hr />

            </div>

            <div className="row">
                <div className="col-7">
                
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo} onToggleTodo={ handleToggleTodo } />
  
                </div>

                <div className="col-5">
                    <h2>My list</h2>
                    <hr />

                    <TodoAdd onNewTodo={ handleNewTodo }/>

                </div>

            </div>

            <footer> Coded by: <a href="https://github.com/josesowl"> José David Montes </a> </footer>

            
        </>
    )
}
