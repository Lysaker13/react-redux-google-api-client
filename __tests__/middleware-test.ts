import {googleApiClient} from '../src/googleApiClient';
import {CLIENT_API_INIT_START, CLIENT_API_INIT_ERROR} from '../src/actions/init';
import {googleApiClientMiddleware} from '../src/middleware';

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
    });
});