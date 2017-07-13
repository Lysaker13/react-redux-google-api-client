import {Action} from 'redux';
import {fromJS, List, Map} from "immutable";
import {SHEET_LOADED_SUCCESSFUL} from "../actions/sheet";

const initialState: any = List();

export default (state = initialState, action: any) => {
    state.clear();

    switch (action.type) {
        case SHEET_LOADED_SUCCESSFUL:
            return List(action.payload.sheet);
        default:
            return state;
    }
}
