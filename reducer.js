import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actions'
import { combineReducers } from redux

const { SHOW_ALL } = VisibilityFilters
const todoApp = combineReducers({
    visbilityFilter,
    todos
})


// Child reducers
function visbilityFilter( state = SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            state
    }
}

// Note, it is enough for the child reducers to return the default state, so the parent doesnt have to!
function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [ 
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })

        default:
            return state
    }
}

export default todoApp