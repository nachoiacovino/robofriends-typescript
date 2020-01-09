import React from "react";

type Props = {
  children?: JSX.Element;
};

const Scroll = ({ children }: Props) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
