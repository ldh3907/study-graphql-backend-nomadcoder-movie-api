import { getMovies } from "./DB";

const resolvers = {
  Query: {
    movies: () => getMovies(),
  },
};

export default resolvers;
