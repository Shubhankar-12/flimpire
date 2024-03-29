import { Grid } from "@mui/material";
import useStyles from "./moviesList.styles";
import { Movie } from "..";

const MovieList = ({ movies, numOfMovies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
