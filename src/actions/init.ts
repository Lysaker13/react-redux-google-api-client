import {Action} from "redux";

/**
 * Api: init
 */
export const CLIENT_API_INIT_START = "@@redux-google-api-client/init/START";
export const CLIENT_API_INIT_ERROR = "@@redux-google-api-client/init/ERROR";
export const CLIENT_API_INIT_FINISH = "@@redux-google-api-client/init/FINISH";

/**
 * Sheet: start update certain cell
 */
 export function initStart(options: any): any {
   return {
       type: CLIENT_API_INIT_START,
       payload: options,
       meta: {}
   }
 }

export function initFinish(): Action {
   return {type: CLIENT_API_INIT_FINISH};
}

export function initError(): Action {
   return {type: CLIENT_API_INIT_ERROR};
}
