import { ArrowBack } from "@mui/icons-material";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetActorsQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import useStyles from "./Actors.styles";
import { MovieList } from "..";

const Actors = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorsQuery(id);
  const page = 1;
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });
  !error && console.log(data);
  return (
    <>
      {isFetching ? (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <CircularProgress size='8rem' />
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item lg={5} xl={4}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
              className={classes.image}
              alt={data?.name}
            />
          </Grid>

          <Grid
            item
            lg={7}
            xl={8}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant='h2' gutterBottom>
              {data?.name}
            </Typography>
            <Typography variant='h5' gutterBottom>
              Born: {new Date(data?.birthday).toDateString()}
            </Typography>
            <Typography variant='body1' align='justify' paragraph>
              {data?.biography || "Sorry, no biography yet..."}
            </Typography>
            <Box className={classes.btns}>
              <Button
                variant='contained'
                color='primary'
                target='_blank'
                href={`https://www.imdb.com/name/${data?.imdb_id}`}
              >
                IMDB
              </Button>
              <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
                Back
              </Button>
            </Box>
          </Grid>
          <Box margin='2rem 0'>
            <Typography variant='h2' gutterBottom align='center'>
              Movies
            </Typography>
            {movies && <MovieList movies={movies} numOfMovies={12} />}
            {/* <Pagination
              currentPage={page}
              setPage={setPage}
              totalPages={movies?.total_pages}
            /> */}
          </Box>
        </Grid>
      )}
    </>
  );
};

export default Actors;
