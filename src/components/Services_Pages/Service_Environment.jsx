import React from "react";
import { SERVICES_ENVIRONMENTAL } from "../../constants";
import { div, li } from "framer-motion/client";

const Service_Environment = () => {
  return (
    <div>
      <ul>
        {Service_Environment.map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
};

export default Service_Environment;
