import defaultMovies from "../default-movies-data.json";

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const setMovies = (newMovies) => {
  setLocalStorageKey("movies", newMovies);
};

export const getMovies = () => {
  const storedMovies = getLocalStorageKey("movies");
  if (!storedMovies) {
    return {};
  }
  return storedMovies;
};

export const resetMovies = () => {
  setMovies(defaultMovies);
};

export const initMoviesIfEmpty = () => {
  const storedMovies = getMovies();
  if (!storedMovies || Object.keys(storedMovies) === 0) {
    setMovies(defaultMovies);
  }
};
