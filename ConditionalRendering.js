import React, { useState } from "react";

const CondRendering = () => {
  const [isCond, setIsCond] = useState(true);

  function subscribe() {
    setIsCond(false);
  }

  function unSubscribe() {
    setIsCond(true);
  }

  return (
    <>
      <p style={{ marginTop: "20px" }}>Conditionaly rendering </p>
      <button disabled={!isCond} onClick={subscribe}>
        {" "}
        subscribe{" "}
      </button>
      <button disabled={isCond} onClick={unSubscribe}>
        {" "}
        unSubscribe{" "}
      </button>
    </>
  );
};

export default CondRendering;
