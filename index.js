import {
    addTodo,
    toggleTodo,
    setVisabilityFilter,
    VisibilityFilters
} from './actions'


// Start logging
console.log("Welcome.")
console.log("Running checks...")


// Log the initial state
console.log(store.getState())

// Every time the state changes, log it..
// subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about Stores'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisabilityFilter(VisibilityFilters.SHOW_COMPLETED))


// stop listening to state updates
unsubscribe()