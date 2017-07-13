import {googleApiClient} from '../googleApiClient';
import {CLIENT_API_INIT_START, CLIENT_API_INIT_ERROR} from '../actions/init';
import googleApiClientMiddleware from '../middleware';

var assert = require('assert');
var sinon = require('sinon');

const initGoogleApiClient = {
    init: (payload) => {}
};

const next = () => {
};

describe('Google API client libraries middleware', function() {
    const doDispatch = () => {};
    const doGetState = () => {};

    const nextHandler:any  = googleApiClientMiddleware({dispatch: doDispatch, getState: doGetState});

    describe('Should handle action', () => {
        const actionHandler: any = nextHandler();

        it('Should call "Google API client libraries" "values.get" method with settings arguments', function () {
            actionHandler({
                type: CLIENT_API_INIT_START,
                payload: []
            })
        });
    });
});