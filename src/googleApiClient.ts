import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/do";
import {Observable} from "rxjs/Observable";
import GoogleAuth = gapi.auth2.GoogleAuth;
import GoogleApiClientAuthAdapter from "./googleApiClientAuthAdapter";
import GoogleApiClientSheetAdapter from "./GoogleApiClientSheetAdapter";

export namespace googleApiClient {
    let _options: any = {};
    /**
     * Google client api initialization promise
     */
    const gaipInitDefer: any = {};
    gaipInitDefer.promise = new Promise(
      function(resolve, reject) {
         gaipInitDefer.resolve = resolve;
         gaipInitDefer.reject = reject;
    });

    /**
     * Google client api initialization Observable
     */
    const gapi$ = Observable.fromPromise(gaipInitDefer.promise);

    /**
     * Google client api auth adapter
     */
    const _auth = new GoogleApiClientAuthAdapter();

    /**
     * Google client api sheet adapter
     */
    const _sheet = new GoogleApiClientSheetAdapter();

    /**
     * Google client api sheet adapter
     */
    export function getApi$() {
      return gapi$;
    }

    export function getAuth() {
        return _auth;
    }

    export function getSheet() {
        return _sheet;
    }

    export function init(options: any): void {
        const script = document.createElement("script");

        setOptions(options);

        script.src = _options.SRC;
        script.async = true;
        script.defer = true;
        script.onload = onLoad.bind(this);
        script.onerror = onError.bind(this);
        document.head.appendChild(script);
    }

    function onLoad(): void {
        const _gapi = (window as any).gapi;

        _gapi.load("client", () => {
            const source$ = authorize(_gapi)
                .do((googleAuth: GoogleAuth) => initAuthInstance(_gapi))
                .do((googleAuth: GoogleAuth) => initSheetInstance(_gapi))
                .subscribe(() => {
                    gaipInitDefer.resolve();
                }, () => {
                    gaipInitDefer.reject();
                });
        });
    }

    function onError(): void {}

    /**
     * Authorize
     * @returns {any}
     */
    function authorize(_gapi): Observable<any> {
        const auth2Options = {
            discoveryDocs: _options.DISCOVERY_DOCS,
            clientId: _options.CLIENT_ID,
            scope: _options.SCOPES,
        };
        return Observable.fromPromise(_gapi.client.init(auth2Options));
    }

    /**
     *
     */
    function initSheetInstance(_gapi: any): GoogleAuth | Error {
        if (!_gapi.auth2) {
            throw new Error("setAuthInstance: _gapi.auth2 isn't set");
        }
        _sheet.setOptions(_options);
        _sheet.setInstance(_gapi.client.sheets.spreadsheets);
        return _sheet.getInstance();
    }

    /**
     *
     */
    function initAuthInstance(_gapi: any): GoogleAuth | Error {
        if (!_gapi.auth2) {
            throw new Error("setAuthInstance: _gapi.auth2 isn't set");
        }
        _auth.setInstance(gapi.auth2.getAuthInstance());
        return _auth.getInstance();
    }

    /**
     *
     */
    function setOptions(opt: any) {
        _options = opt;
    }
}
