import React from "react";
import ShopItemsList from "./shopItemsList";
import ShopHeader from "./shopHeader";

class ArtShopComponent extends React.Component {
    render() {
        return (<div>
            <ShopHeader />
            <ShopItemsList />
        </div>);
    }
}
export default ArtShopComponent;
