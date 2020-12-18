import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import getPartnerPreference from './partner';
import matchLists from './matchList';

export default combineReducers({
  profile: profileReducer,
  partner: getPartnerPreference,
  matchLists,
});
