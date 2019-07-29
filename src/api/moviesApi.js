const FILMS_SOURCE = "http://react-cdp-api.herokuapp.com";

class MoviesApi {
  static getAllMovies() {
    return fetch(`${FILMS_SOURCE}/movies`)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export { MoviesApi };
