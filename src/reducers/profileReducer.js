import { GET_PROFILE } from '../actions';
const initialState = {
  profile: null,
  loading: true,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        profile: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default profileReducer;
