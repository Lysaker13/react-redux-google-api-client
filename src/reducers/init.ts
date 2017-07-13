import {Action} from 'redux';
import {fromJS} from "immutable";
import {
  CLIENT_API_INIT_FINISH
} from "../actions/";

const initialState: any = fromJS({
    isInited: false
});

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case CLIENT_API_INIT_FINISH:
            return state.merge({isInited: true});

        default:
            return state;
    }
}
