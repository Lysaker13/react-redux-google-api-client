import GoogleAuth = gapi.auth2.GoogleAuth;

/**
 * Google sheet api class
 */
export default class GoogleApiClientAuthAdapter {
    /**
     * Google auth instance
     * @type {any}
     * @private
     */
    private _auth = null;

    /**
     * Init hook TODO: not implement yet
     */
    public onInit() {
       this._auth.isSignedIn.listen((isSignedIn) => {
           (isSignedIn)
               ? () => console.log('is signed in ...')
               : () => console.log('is signed out ...')
       });
    }

    /**
     * Set google auth instance
     */
    public setInstance(auth: any) {
        this._auth = auth;
    }

    /**
     * Get auth instance
     * @returns {null}
     */
    public getInstance() {
        return this._auth;
    }

    /**
     * Sign in
     */
    public signIn(): any {
        if (this._auth) {
            return this._auth.signIn();
        } else {
            console.log('signIn: gapi is not initialize...');
        }

        return null;
    }

    /**
     * Sign out
     */
    public signOut(): any {
        if (this._auth) {
            return this._auth.signOut();
        } else {
            console.log('signOut: gapi is not initialize...');
        }

        return null;
    }

    /**
     * Is signed in
     * @returns {boolean | undefined}
     */
    public isSignedIn(): boolean {
        return this._auth && this._auth.isSignedIn.get();
    }
}
