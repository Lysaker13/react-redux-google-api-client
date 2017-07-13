import {Action} from 'redux';
import {List} from "immutable";
import {FluxStandardAction} from 'flux-standard-action';

/**
 * Sheet: loading whole sheet
 */
export const SHEET_START_LOADING = "@@google-api-client/sheet/START_LOADING";
export const SHEET_LOAD_ERROR = "@@google-api-client/sheet/LOAD_ERROR";
export const SHEET_LOADED_SUCCESSFUL = "@@google-api-client/sheet/LOADED_SUCCESSFUL";

/**
 * Sheet: sheet update cell
 */
export const SHEET_UPDATE_CELL_START = "@@google-api-client/sheet/UPDATE_CELL_START";
export const SHEET_UPDATE_CELL_ERROR = "@@google-api-client/sheet/UPDATE_CELL_ERROR";
export const SHEET_UPDATE_CELL_SUCCESSFUL = "@@google-api-client/sheet/UPDATE_CELL_SUCCESSFUL";

/**
 * Sheet: sheet update cell
 */
export const SHEET_UPDATE_ROW_START = "@@google-api-client/sheet/UPDATE_ROW_START";
export const SHEET_UPDATE_ROW_ERROR = "@@google-api-client/sheet/UPDATE_ROW_ERROR";
export const SHEET_UPDATE_ROW_SUCCESSFUL = "@@google-api-client/sheet/UPDATE_ROW_SUCCESSFUL";



export type SheetLoadedAction = FluxStandardAction<any, {}>;

/**
 * Sheet: loading sheet action creator
 */
 export function sheetStartLoading(): Action {
    return {type: SHEET_START_LOADING};
 }

 /**
  * Sheet: error update certain cell
  */
 export function sheetLoadError() {
    return {type: SHEET_LOAD_ERROR}
 }

 /**
  * Sheet: loaded successful action creator
  */
 export function sheetLoadedSuccessful(sheet: any): any {
     return {
         type: SHEET_LOADED_SUCCESSFUL,
         payload: {
             sheet: sheet
         },
         meta: {}
     }
 }

/**
 * Sheet: start update certain cell
 */
 export function sheetCellUpdatedStart(data: any): any {
   return {
       type: SHEET_UPDATE_CELL_START,
       payload: {
           id: data.id,
           value: data.value
       },
       meta: {}
   }
 }

 /**
  * Sheet: start update certain cell
  */
export function sheetUpdatedCellSuccessful(): any {
    return {type: SHEET_UPDATE_CELL_SUCCESSFUL}
}

  /**
   * Sheet: error update certain cell
   */
export function sheetUpdatedCellError() {
    return {type: SHEET_UPDATE_CELL_ERROR}
}


/**
 * Sheet: start update certain cell
 */
export function sheetRowUpdatedStart(record: any): any {
    return {
        type: SHEET_UPDATE_ROW_START,
        payload: {
            ...record
        },
        meta: {}
    }
}

/**
 * Sheet: start update certain cell
 */
export function sheetUpdatedRowSuccessful(): any {
    return {type: SHEET_UPDATE_ROW_SUCCESSFUL}
}

/**
 * Sheet: error update certain cell
 */
export function sheetUpdatedRowError() {
    return {type: SHEET_UPDATE_ROW_ERROR}
}
