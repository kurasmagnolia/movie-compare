import { setMovies, getMovies, resetMovies, addMovie } from "./local-storage";

export const renderMovie = (
  criticScore,
  audienceScore,
  domestic,
  genre,
  title
) => {
  // grabbing the movie list
  const movieList = document.getElementsByClassName("movies-list");
};

export const handleFormSubmit = (event) => {
  // prevent the default action
  event.preventDefault();

  const movies = getMovies();

  // grab the form data
  const newMovieTitle = event.target.title.value;
  const newMovieID = "custom-movie";
  const newCriticScore = event.target.critic.value;
  const newAudienceScore = event.target.audience.value;
  const newDomesticGrossSales = event.target.domestic.value;
  const newMovieGenre = event.target.genre.value;

  movies[newMovieID] = {
    criticScore: newCriticScore,
    audienceScore: newAudienceScore,
    domestic: newDomesticGrossSales,
    genre: newMovieGenre,
    title: newMovieTitle,
  };

  // adding movie to localStorage
  addMovie(movies);

  // render movie to list using DOM
  renderMovie(
    newCriticScore,
    newAudienceScore,
    newDomesticGrossSales,
    newMovieGenre,
    newMovieTitle
  );
};
