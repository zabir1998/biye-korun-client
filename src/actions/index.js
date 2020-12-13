export const GET_PROFILE = 'get_profile';

export const getProfile = (data) => {
  return {
    type: GET_PROFILE,
    payload: data,
  };
};
