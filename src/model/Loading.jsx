import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <div
    style={{
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      display: "flex",
    }}
  >
    <ReactLoading type={type} color={color} height={100} width={100} />
  </div>
);

export default Loading;
