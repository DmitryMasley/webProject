export default {
    addTodo: text => ({
        type: "ADD_TODO",
        text
    }),
    toggleTodo: id => ({
        type: "TOGGLE_TODO",
        id
    }),
    setFilter: filter => ({
        type: "SET_VISIBILITY_FILTER",
        filter
    })
};
