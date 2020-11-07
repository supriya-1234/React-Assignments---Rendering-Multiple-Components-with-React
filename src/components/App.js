import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <h1 data-ns-test="project-name">{`Project Name`}</h1>
      <p data-ns-test="project-description">{`Project Description`}</p>
    </>
  );
};

export default App;
