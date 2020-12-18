import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import getPartnerPreference from './partner';
import matchLists from './matchList';
import getProfileById from './getProfileById';

export default combineReducers({
  profile: profileReducer,
  partner: getPartnerPreference,
  matchLists,
  getProfileById,
});
