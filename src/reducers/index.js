export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SECTION":
      return {
        ...state,
        sectionActive: action.payload,
      };
    default:
      return state;
  }
};

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

