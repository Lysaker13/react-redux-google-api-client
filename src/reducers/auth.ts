import {Action} from 'redux';
import {fromJS} from "immutable";
import {
  AUTH_IS_SIGNED_IN,
  AUTH_IS_SIGNED_OUT
} from "../actions/";

const initialState: any = fromJS({
    isSignedIn: false
});

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case AUTH_IS_SIGNED_IN:
            return state.merge({isSignedIn: true});

        case AUTH_IS_SIGNED_OUT:
            return state.merge({isSignedIn: false});

        default:
            return state;
    }
}
