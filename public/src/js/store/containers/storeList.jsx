import { connect } from "react-redux";
import List from "../components/list";

const StoreList = connect(
    state => ({
        items: state.itemsList
    }),
    dispatch => ({

    })
)(List);

export default StoreList;
