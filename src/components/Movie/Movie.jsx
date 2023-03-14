import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Movie.Styles";

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in={Boolean(i)} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movies/${movie.id}`}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt={movie.title}
            className={classes.image}
          />
          <Typography className={classes.title} variant='h6'>
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating value={movie.vote_average / 2} readOnly precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;