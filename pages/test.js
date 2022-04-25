import React from "react";
import Button from "../basic_components/button/Button";

const test = () => {
  const click = () => {
    fetch("/api/klaviyoHD", {
      method: "POST",
      body: JSON.stringify({
        email: "ziga.susin@gmail.com",
        items: "<br></br>",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <Button primary onClick={click}>
      Click
    </Button>
  );
};

export default test;
