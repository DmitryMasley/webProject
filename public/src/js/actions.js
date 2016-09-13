export default {
    addTodo: (text)=>{
        return {
            type: "ADD_TODO",
            text
        }
    },
    toggleTodo: (id)=>{
        return {
            type: "TOGGLE_TODO",
            id
        }
    },
    setFilter: (filter)=>{
        return {
            type: "SET_VISIBILITY_FILTER",
            filter
        }
    }
}