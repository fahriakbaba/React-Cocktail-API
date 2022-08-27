import React from "react";

function Loading() {
  return (
    <main className="loading--container">
      <h3 className="loading--title">Loading...</h3>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}

export default Loading;
