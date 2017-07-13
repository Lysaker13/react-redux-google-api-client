import {Action} from "redux";

/**
 * Auth: sign in
 */
export const AUTH_START_SIGN_IN = "@@redux-google-api-client/auth/START_SIGN_IN";
export const AUTH_ERROR_SIGN_IN = "@@redux-google-api-client/auth/ERROR_SIGN_IN";
export const AUTH_IS_SIGNED_IN = "@@redux-google-api-client/auth/IS_SIGNED_IN";

/**
 * Auth: sign out
 */
export const AUTH_START_SIGN_OUT = "@@redux-google-api-client/auth/START_SIGN_OUT";
export const AUTH_ERROR_SIGN_OUT = "@@redux-google-api-client/auth/ERROR_SIGN_OUT";
export const AUTH_IS_SIGNED_OUT = "@@redux-google-api-client/auth/IS_SIGNED_OUT";

/**
 * Auth: check status
 */
export const AUTH_CHECK_STATUS = "@@redux-google-api-client/auth/CHECK_STATUS";

/**
 * Auth check status
 */
 export function authStatusCheck() {
   return {type: AUTH_CHECK_STATUS};
 }

/**
 * Sign in
 */
export function authSignInStart(): Action {
   return {type: AUTH_START_SIGN_IN};
}

export function authSignInError(): Action {
   return {type: AUTH_ERROR_SIGN_IN};
}

export function authIsSignedIn(): Action {
   return {type: AUTH_IS_SIGNED_IN};
}

/**
 * Sign out
 */
export function authSignOutStart(): Action {
   return {type: AUTH_START_SIGN_OUT};
}

export function authSignOutError(): Action {
   return {type: AUTH_ERROR_SIGN_OUT};
}

export function authIsSignedOut(): Action {
    return {type: AUTH_IS_SIGNED_OUT}
}
