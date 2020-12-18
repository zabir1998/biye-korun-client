export const GET_PROFILE = 'get_profile';
export const GET_PARTNER_PREFERENCE = 'GET_PARTNER_PREFERENCE';
export const MATCH_LISTS = 'MATCH_LISTS';
export const GET_PROFILE_BY_ID = 'GET_PROFILE_BY_ID';

export const getProfile = (data) => {
  return {
    type: GET_PROFILE,
    payload: data,
  };
};

export const getPartnerPreference = (data) => {
  return {
    type: GET_PARTNER_PREFERENCE,
    payload: data,
  };
};

export const getMatchLists = (data) => {
  return {
    type: MATCH_LISTS,
    payload: data,
  };
};

export const getProfileById = (data) => {
  return {
    type: GET_PROFILE_BY_ID,
    payload: data,
  };
};
