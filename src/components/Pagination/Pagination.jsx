import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "./Pagination.styles";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();
  const handlePrev = () => {
    if (currentPage !== 1) setPage((prevPg) => prevPg - 1);
  };
  const handleNext = () => {
    if (currentPage !== totalPages) setPage((prevPg) => prevPg + 1);
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        className={classes.btns}
        variant='contained'
        color='primary'
        type='button'
        startIcon={<ArrowBack />}
        onClick={handlePrev}
      >
        Prev
      </Button>
      <Typography variant='h4' className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        className={classes.btns}
        variant='contained'
        color='primary'
        type='button'
        endIcon={<ArrowForward />}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
