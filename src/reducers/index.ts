import {combineReducers} from 'redux-immutable';

import auth from './auth';
import sheet from './sheet';
import init from './init';

export default combineReducers({
  auth,
  sheet,
  init
});
