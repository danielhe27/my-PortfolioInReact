import React from 'react';

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="error-page">
      <h1>Error {errorCode}</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
