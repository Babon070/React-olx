const initialState = {
  email: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { email: action.email };
    case "CREATE_NAME":
      return { email: action.email };
    default:
      return state;
  }
};

export default mainReducer;
