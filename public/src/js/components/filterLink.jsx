import React from "react";

'use strict';
class FilterLink extends React.Component {
    constructor(options){
        super();
        this.setFilter = options.setFilter;
    }
    render(){
        if(this.props.currentFilter === this.props.filter){
            return (<div>
                <span>{this.props.children}</span>
            </div>)
        }
        return (
            <div>
            <a href='#' onClick={(e) => {
                    e.preventDefault();
                    this.setFilter(this.props.filter);
                }
            }>{this.props.children}</a>
                </div>);
    }
}


export default FilterLink;