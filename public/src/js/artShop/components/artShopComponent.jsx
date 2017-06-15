import React from "react";
import ShopItemsList from "../containers/shopItemsList";
import ShopHeader from "./shopHeader";

class ArtShopComponent extends React.Component {
    render() {
        return (<div className="panel panel-default">
            <ShopHeader />
            <ShopItemsList />
        </div>);
    }
}
export default ArtShopComponent;
