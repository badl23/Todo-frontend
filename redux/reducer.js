
// It defines a Redux slice for managing todos (add, update, remove, complete) using the createSlice utility from Redux Toolkit.
import { createSlice } from "@reduxjs/toolkit"; // Automatically generates action creators
                                                // Automatically sets up reducers
                                                // Keeps Redux code clean and minima
const initialState = [];

//This defines your Redux slice, which includes:
const addTodoReducer = createSlice({
    name: "todos",//the name of this slice of state ("todo")
    initialState,//initialState: the starting state of the slice
    reducers: { // an object with all the reducers (and corresponding actions) for updating state.
// State Definition: This is the current state of the slice before the action happens.
        // In your case, state is an array of todo items.
// Action : the event that tells Redux to update the state
//{
//     type: "todo/addTodos",       // what kind of action
//     payload: {                   // the data passed to the reducer
//         id: 3,
//         item: "Build a todo app",
//         completed: false
//        }
//     }
// Redux Toolkit creates these automatically using createSlice.
        addTodos: (state, actions) => {
            state.push(actions.payload);
        },
        // When in removetodos just a number is passed then in actions.payload you will only get that id.
        removeTodos: (state, actions) => {
            console.log("remove todos", actions.payload.id);
            return state.filter((item) => item.id != actions.payload)
        },
        updateTodos: (state, actions) => {
            console.log("updating todos", actions.payload.id);
            return state.map((todo) => todo.id == actions.payload.id ? { ...todo, item: actions.payload.item } : todo);
        },
        completeTodos: (state, actions) => {
            console.log("Completing todo:", actions.payload.id);
            return state.map((todo) => todo.id === actions.payload.id ? { ...todo, completed: true } : todo);
        }
    }
});

export const {
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos
} = addTodoReducer.actions;



export const reducer = addTodoReducer.reducer