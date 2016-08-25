import React from "react";
import FilterLink from "./filterLink";

class Footer extends React.Component {
    render(){
        return<div>
            <FilterLink filter="SHOW_ALL" {... this.props}>Show ALL</FilterLink>
            <FilterLink filter="SHOW_COMPLETED"  {... this.props}>Show COMPLETED</FilterLink>
            <FilterLink filter="SHOW_ACTIVE"  {... this.props}>Show ACTIVE</FilterLink>
        </div>
    }
}
export default Footer;