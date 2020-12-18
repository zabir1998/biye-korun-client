import { GET_PROFILE_BY_ID } from '../actions';
const initialState = {
  getProfileById: null,
  loading: true,
};

const getProfileById = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_BY_ID:
      return {
        getProfileById: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default getProfileById;
