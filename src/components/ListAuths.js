import React, { Fragment, useEffect, useState } from "react";

const ListAuths = () => {
  const [auths, setAuths] = useState([]);

  const getAuths = async () => {
    try {
      const response = await fetch("http://localhost:5000/auths");

      const jsonData = await response.json();
      setAuths(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAuths();
  }, []);

  // console.log(auths);
  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>PL Key</th>
            <th>Public Law</th>
            <th>Section</th>
            <th>Auth Code</th>
            <th>Report Type</th>
            <th>Report Appr Date</th>
            <th>Program Code</th>
            <th>Program Name</th>
            <th>Project Type Code</th>
            <th>Project Status</th>
          </tr>
        </thead>
        <tbody>
          {auths.map((auth) => (
            <tr>
              <td>{auth.PL_KEY}</td>
              <td>{auth.PUBLIC_LAW}</td>
              <td>{auth.SECTION}</td>
              <td>{auth.AUTHORIZATION_CODE}</td>
              <td>{auth.REPORT_TYPE}</td>
              <td>{auth.REPORT_APPROVAL_DATE}</td>
              <td>{auth.PROGRAM_CODE}</td>
              <td>{auth.PROGRAM_NAME}</td>
              <td>{auth.PROJECT_TYPE_CODE}</td>
              <td>{auth.PROJECT_STATUS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListAuths;
