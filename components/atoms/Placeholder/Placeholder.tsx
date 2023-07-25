import React from "react";

export const Placeholder: React.FC<{ height?: number }> = ({ height = 20 }) => {
  return <div style={{ width: "100%", height: height }}></div>;
};
