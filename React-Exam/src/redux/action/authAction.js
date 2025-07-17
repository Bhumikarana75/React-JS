export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/users");
    const users = await res.json();

    const user = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      navigate("/view");
    } else {
      alert("Invalid credentials");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: "LOGOUT" });
};