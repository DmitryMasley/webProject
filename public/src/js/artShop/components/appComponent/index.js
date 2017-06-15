import React from "react";
import CssModules from "react-css-modules";
import style from "./style.scss";

class AppComponent extends React.PureComponent {
    render() {
        return (
            <div styleName="root-container">
                {this.props.children}
            </div>
        );
    }
}
export default CssModules(AppComponent, style);
