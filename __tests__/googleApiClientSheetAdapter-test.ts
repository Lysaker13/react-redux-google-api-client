import GoogleApiClientSheetAdapter from '../src/GoogleApiClientSheetAdapter';
import configStub from './googleApi.conf.stub-test';

var assert = require('assert');
var sinon = require('sinon');

var sheetInstanceMock = null;
var sheetAdapter = new GoogleApiClientSheetAdapter();

sheetAdapter.setInstance(sheetInstanceMock = {
    values: {
        get: (setttings: any) => {},
        update: (setttings: any) => {}
    }
});

sheetAdapter.setOptions(configStub);

describe('The GoogleApiClientSheetAdapter instance', function() {
    describe('#getInstance()', function() {
        it('Should return "Google API client libraries" "sheet" instance', function() {
            assert.equal(sheetAdapter.getInstance(), sheetInstanceMock);
        });
    });

    describe('#getOptions()', function() {
        it('Should return "Google API client libraries" "sheet" instance', function() {
            assert.equal(sheetAdapter.getOptions(), configStub);
        });
    });

    describe('#getAllRecords()', function() {
        var spy = sinon.spy(sheetInstanceMock.values, "get");
        it('Should call "Google API client libraries" "values.get" method with settings arguments', function () {
            const settings = {
                spreadsheetId: configStub.SPREADSHEET_ID,
                range: configStub.SPREADSHEET_RANGE,
            };

            sheetAdapter.getAllRecords();
            assert(spy.calledWith(settings));
        });
    });

    describe('#updateRecord()', function() {
        const rowStub = {
            range: 'E1',
            values: ['111', '222']
        };

        const settings = {
            valueInputOption: "RAW",
            spreadsheetId: configStub.SPREADSHEET_ID,
            range: configStub.SPREADSHEET_RANGE + '!' + rowStub.range,
            values: [rowStub.values]
        };

        it('Should call "Google API client libraries" "values.update" method with settings arguments', function () {
            var spy = sinon.spy(sheetInstanceMock.values, "update");
            sheetAdapter.updateRecord(settings);
            spy.alwaysCalledWithExactly(settings);
        });
    });
});
