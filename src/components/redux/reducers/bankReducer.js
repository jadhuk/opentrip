import { GET_BANK } from "../actions/actionTypes";

const initState = {
  getBank: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case "GETBANK":
      return {
        ...state,
        getBank: action.payload.getBank,
        loading: false,
      };

    /* Default return  */
    default:
      return state;
  }
}
