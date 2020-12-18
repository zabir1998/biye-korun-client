import { MATCH_LISTS } from '../actions';
const initialState = {
  matchLists: null,
  loading: true,
};

const matchLists = (state = initialState, action) => {
  switch (action.type) {
    case MATCH_LISTS:
      return {
        partnerPreference: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default matchLists;
