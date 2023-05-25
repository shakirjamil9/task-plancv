import React from "react";

const PathRect = ({ d, setDataOnHover, data }) => {
  const [border, setBorder] = React.useState(false);

  return (
    <>
      <path
        data={JSON.stringify(data)}
        d={d}
        stroke={border ? "#FFFF00" : "#000"}
        onMouseEnter={e => {
          const customDataString = e.target.getAttribute("data");
          const customData = JSON.parse(customDataString);
          setBorder(true);
          setDataOnHover(customData);
        }}
        onMouseLeave={() => {
          setBorder(false);
          setDataOnHover(false);
        }}
      />
    </>
  );
};

export default PathRect;
