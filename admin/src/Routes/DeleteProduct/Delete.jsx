import React, { useEffect } from "react";

const Delete = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("cred"));
    if(user === null) {
      window.location.href = "/login";
    }
  }, []);

  return <div>Delete</div>;
};

export default Delete;
