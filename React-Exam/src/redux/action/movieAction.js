export const fetchMovies = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/movies");
    const data = await res.json();
    dispatch({ type: "SET_MOVIES", payload: data });
  } catch (error) {
    console.error("Fetch movies error:", error);
  }
};

export const addMovie = (movie, navigate) => async (dispatch) => {
  try {
    await fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    dispatch(fetchMovies());
    navigate("/view");
  } catch (error) {
    console.error("Add movie error:", error);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    });
    dispatch(fetchMovies());
  } catch (error) {
    console.error("Delete movie error:", error);
  }
};

export const updateMovie = (id, updatedMovie, navigate) => async (dispatch) => {
  try {
    await fetch(`http://localhost:5000/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    });
    dispatch(fetchMovies());
    navigate("/view");
  } catch (error) {
    console.error("Update movie error:", error);
  }
};