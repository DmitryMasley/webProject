import React from "react";

class Provider extends React.Component {
    getChildContext(){
        return {
            store : this.props.store,
            addTodo: this.props.addTodo,
            toggleTodo: this.props.toggleTodo,
            setFilter: this.props.setFilter
        }
    }
    render(){
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store: React.PropTypes.object,
    setFilter: React.PropTypes.func,
    toggleTodo: React.PropTypes.func,
    addTodo: React.PropTypes.func
};
export default Provider;