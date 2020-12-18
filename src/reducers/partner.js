import { GET_PARTNER_PREFERENCE } from '../actions';
const initialState = {
  partnerPreference: null,
  loading: true,
};

const getPartnerPreference = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTNER_PREFERENCE:
      return {
        partnerPreference: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default getPartnerPreference;
