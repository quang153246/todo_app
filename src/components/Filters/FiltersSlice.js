// const initialState = {
//     filters: {
//         search: '',
//         status: 'All',
//         prioriry: []
//     }
// }


// const filtersReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'filters/searchFilterChange':
//             return{
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusFilterChange':
//             return{
//                 ...state,
//                 status: action.payload
//             }
//         default:
//             return state
//     }

// }

// export default filtersReducer


import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            //viết như mutation || thư viện IMMER
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload;
        }
        
    }
})