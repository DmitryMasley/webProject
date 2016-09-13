import React from "react";
import FilterLink from "./filterLink";

class Footer extends React.Component {
    render(){
        return<div>
            <FilterLink filter="SHOW_ALL">Show ALL</FilterLink>
            <FilterLink filter="SHOW_COMPLETED">Show COMPLETED</FilterLink>
            <FilterLink filter="SHOW_ACTIVE">Show ACTIVE</FilterLink>
        </div>
    }
}
export default Footer;