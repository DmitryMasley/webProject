import React from "react";

export default class Link extends React.Component {
    render(){
        if(this.props.active){
            return (<span style={{margin:"0 15px"}}>{this.props.children}</span>)
        }
        return (<a style={{margin:"0 15px"}} href='#' onClick={this.props.onClick}>{this.props.children}</a>);
    }
}