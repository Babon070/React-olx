
const initialState = {
  email: "",
};

const mainReducer = (state = initialState, action) => {
  console.log(action.email);
  switch (action.type) {
    case "CREATE_USER":
      return { email: action.email };
    case "CREATE_NAME_WITH_GOOGLE":
      return { email: action.email };
    default:
      return state;
  }
};

export default mainReducer;
