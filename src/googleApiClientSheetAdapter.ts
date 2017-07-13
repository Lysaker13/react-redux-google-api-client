import GoogleAuth = gapi.auth2.GoogleAuth;

/**
 * Google sheet api class
 */
export default class GoogleApiClientSheetAdapter {
    /**
     * Google api instance
     * @type {any}
     * @private
     */
    private _sheet = null;

    /**
     * Google api options
     * @type {any}
     * @private
     */
    private _options: any = {};

    /**
     * Set google api instance
     * @param gapi
     */
    public setInstance(sheet: any) {
        this._sheet = sheet;
    }

    public setOptions(opts: any) {
        this._options = opts;
    }

    public getOptions() {
        return this._options;
    }

    /**
     * Get sheet instance
     * @returns {null}
     */
    public getInstance() {
        return this._sheet;
    }

    /**
     * Get all records
     * @param source$
     */
    public getAllRecords(): any {
        const settings = {
            spreadsheetId: this._options.SPREADSHEET_ID,
            range: this._options.SPREADSHEET_RANGE,
        };
        return this._sheet.values.get(settings);
    }

    /**
     * Update record by row id
     * @param rowId (Example: E2 -> '2' is rowID)
     */
    public updateCell(row: any): any {

        const settings = {
            valueInputOption: "RAW",
            spreadsheetId: this._options.SPREADSHEET_ID,
            range: this._options.SPREADSHEET_RANGE + '!' + this._options.SHEET_POSITION_COLUMN_READER_ID + row.id,

            values: [[row.value]]
        };

        if(row.id) {
            return this._sheet.values.update(settings);
        }

        return null;
    }

    /**
     * Update record by row id
     * @param rowId (Example: E2 -> '2' is rowID)
     */
    public updateRecord(row: any): any {
        if(row && row.range && row.values) {
            const settings = {
                valueInputOption: "RAW",
                spreadsheetId: this._options.SPREADSHEET_ID,
                range: this._options.SPREADSHEET_RANGE + '!' + row.range,
                values: [row.values]
            };

            return this._sheet.values.update(settings);

        } else {
            console.log('updateRecord consists wrong data or empty', row);
        }

        return null;
    }
}