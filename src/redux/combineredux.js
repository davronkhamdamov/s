import { combineReducers } from 'redux';
import { shopreduser } from './reducer';
const joinedreduser = combineReducers({
  id: shopreduser,
});
export { joinedreduser };
