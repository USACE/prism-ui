import React, { Fragment, useState } from "react";

const InputAuth = () => {
  const [authTitle, setAuthTitle] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { authTitle };
      const response = fetch("http://localhost:5000/auths", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={authTitle}
          onChange={(e) => setAuthTitle(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputAuth;
