// Check login status from localStorage
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const storedUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const initialState = {
  isAuthenticated: isLoggedIn,
  user: storedUser,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return { ...state, isAuthenticated: true, user: action.payload };

    case "LOGOUT":
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
      return { ...state, isAuthenticated: false, user: null };

    default:
      return state;
  }
};

export default authReducer;
