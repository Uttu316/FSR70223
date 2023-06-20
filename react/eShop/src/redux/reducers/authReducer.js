const initialState = {
  isLoggedIn: false,
  token: null,
};

// reducer takes state and an action as parameters
// reducer returns updated state again

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN_TOKEN":
      return { ...state, isLoggedIn: true, token: action.payload };
  }
  return { ...state };
};

export default authReducers;
