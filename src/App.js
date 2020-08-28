import React, { Fragment } from "react";
import "./App.css";

//components
// import InputAuth from "./components/InputAuth";
import ListAuths from "./components/ListAuths";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Fragment>
          <h1 className="text-center mt-5">PRISM Original Auth List</h1>
        </Fragment>
        <ListAuths />
      </div>
    </Fragment>
  );
}

export default App;
