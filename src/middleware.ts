import {CLIENT_API_INIT_START} from './actions/init';
import {googleApiClient} from './googleApiClient';

export function googleApiClientMiddleware({dispatch, getState}) {
    return next => action => {
        if(action.type === CLIENT_API_INIT_START) {
            googleApiClient.init(action.payload);
        }
        next(action);
    }
}