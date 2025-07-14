import axios from "axios";

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: "MOVIES_REQUEST" });

  try {
    const res = await axios.get("http://localhost:5000/users");
    dispatch({ type: "MOVIES_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "MOVIES_FAIL", payload: error.message });
  }
};
