/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";

const Inflow = () => {
  const user = false;
  
  useEffect(() => {
    if(!user) {
        window.location.href = "/login";
    } else {
        window.location.href = "/home";
    }
  }, [user]);

  return <div></div>;
};

export default Inflow;
