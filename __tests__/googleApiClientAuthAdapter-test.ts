import GoogleApiClientAuthAdapter from '../src/googleApiClientAuthAdapter';
var assert = require('assert');
var sinon = require('sinon');

var authAdapter = null;
var authInstanceMock = null;

authAdapter = new GoogleApiClientAuthAdapter();
authAdapter.setInstance(authInstanceMock = {
    signIn: () => {},
    signOut: () => {},
    isSignedIn: {
        get: () => {}
    }
});

describe('GoogleApiClientAuthAdapter', function() {
    describe('#getInstance()', function() {
        it('Should return "Google API client libraries" "auth" instance', function() {
            assert.equal(authAdapter.getInstance(), authInstanceMock);
        });
    });

    describe('#signIn()', function() {
        var spy = sinon.spy(authInstanceMock, "signIn");

        it('Should call "Google API client libraries" "signIn" method', function() {
            authAdapter.signIn();
            assert(spy.called);
        });
    });

    describe('#signOut()', function() {
        var spy = sinon.spy(authInstanceMock, "signOut");

        it('Should call "Google API client libraries" "signOut" method', function() {
            authAdapter.signOut();
            assert(spy.called);
        });
    });

    describe('#isSignedIn()', function() {
        it('Should contain "Google API client libraries" "isSignedIn" property', function () {
            // authAdapter.should.have.property('isSignedIn');
        });

        describe('#get()', function() {
            var spy = sinon.spy(authInstanceMock.isSignedIn, "get");
            it('Should call "Google API client libraries" "isSignedIn.get" method', function () {
                authAdapter.isSignedIn();
                assert(spy.called);
            });
        });
    });
});
