const initialMovieState = {
  movies: [],
};

const movieReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;