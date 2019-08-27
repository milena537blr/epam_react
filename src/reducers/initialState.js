const initialState = {
  data: {
    movies: [],
    loading: false,
    error: ""
  },
  filters: {
    text: "",
    sortBy: "rating",
    searchBy: "title"
  }
};

export { initialState };
