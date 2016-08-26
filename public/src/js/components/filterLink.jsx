import React from "react";
import Link from "./link";

'use strict';
class FilterLink extends React.Component {
    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        const props = this.props;
        const state = this.context.store.getState();

        return <Link active={props.filter === state.visibilityFilter} onClick={(e) => {
            e.preventDefault();
            this.context.setFilter(props.filter);
        }}>{this.props.children}</Link>
    }
}
FilterLink.contextTypes = {
    store: React.PropTypes.object,
    setFilter: React.PropTypes.func
};

export default FilterLink;