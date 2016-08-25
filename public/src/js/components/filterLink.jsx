import React from "react";
import Link from "./link";

'use strict';
class FilterLink extends React.Component {
    componentDidMount(){
        this.unsubscribe = this.props.store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    constructor(options){
        super();
        this.setFilter = options.setFilter;
    }
    render(){
        const props = this.props;
        const state = this.props.store.getState();

        return <Link active={props.filter === state.visibilityFilter} onClick={(e) => {
            e.preventDefault();
            this.setFilter(props.filter);
        }}>{this.props.children}</Link>
    }
}


export default FilterLink;