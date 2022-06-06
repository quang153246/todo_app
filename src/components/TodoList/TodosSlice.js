// const initialState = {
//     todoList: [
//         {id: 1, name: 'Quét nhà', completed: false, prioriry: 'Medium'},
//         {id: 2, name: 'Rửa bát', completed: true, prioriry: 'High'},
//         {id: 3, name: 'Học bài', completed: false, prioriry: 'Low'},
//     ]
// }


// const todoListReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'todoList/addTodo':
//             return [ ...state, action.payload]
//         default:
//             return state
//     }

// }

// export default todoListReducer


import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'todoList',
    initialState: [
        {id: 1, name: 'Learn React', completed: false, priority: 'Medium'},
        {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
        {id: 3, name: 'Learn Javascript', completed: false, priority: 'Medium'},
        {id: 4, name: 'Learn Nodejs', completed: false, priority: 'Low'},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if(currentTodo){
                currentTodo.completed = !currentTodo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((item) =>{
                return item.id !== action.payload
            })
        }
    }
})