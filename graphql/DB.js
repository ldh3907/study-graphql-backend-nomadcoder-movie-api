let movies = [
  {
    id: 0,
    name: "avengers",
    score: 5,
  },
  {
    id: 1,
    name: "star wars",
    score: 2,
  },
  {
    id: 2,
    name: "jjang gu",
    score: 3,
  },
  {
    id: 3,
    name: "voice",
    score: 4,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
