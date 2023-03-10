import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Actors, Navbar, Profile, MovieInformation, Movies } from ".";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Navbar className={classes.root} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path='/movie/:id' element={<MovieInformation />} />

          <Route exact path='/' element={<Movies />} />

          <Route exact path='/actors/:id' element={<Actors />} />

          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
