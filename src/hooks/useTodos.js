import { useEffect, useReducer } from "react";
import { TodoReducer } from "../components/TodoReducer";



const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

export const useTodos = () => {
    const [ todos, dispatch ] = useReducer( TodoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] delete Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
         dispatch({
             type: '[TODO] toggle Todo',
             payload: id
         })
    }

    return {
        todos,
        todosCounter: todos.length,
        pendingCounter: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
