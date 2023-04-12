import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Actors, Navbar, Profile, MovieInformation, Movies } from ".";
import useAlan from "./Alan";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path='/movie/:id' element={<MovieInformation />} />
          {/* multiple routes */}
          <Route exact path='/' element={<Movies />} />
          <Route exact path='/approved' element={<Movies />} />
          <Route exact path='/actors/:id' element={<Actors />} />

          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
