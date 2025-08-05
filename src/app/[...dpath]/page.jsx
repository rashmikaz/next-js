import React from "react";

const page = ({ params }) => {
  return (
    <>
      <ul>
        {params.dpath.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default page;
