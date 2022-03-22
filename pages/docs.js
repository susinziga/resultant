import React from "react";
import Button from "../basic_components/button/Button";
import Input from "../basic_components/input/Input";
import Textarea from "../basic_components/textarea/Textarea";

const docs = () => {
  return (
    <>
      <div style={{ padding: "100px" }}>
        <Button primary>GUMP</Button> <Button secondary>GUMP 2</Button>
      </div>
      <div style={{ padding: "20px", width: "30%" }}>
        <Input props={{ label: "Label", placeholder: "Text" }}></Input>
      </div>
      <div style={{ padding: "20px", width: "30%" }}>
        <Input
          props={{ label: "Label", placeholder: "Text", required: "*" }}
        ></Input>
      </div>
      <div style={{ padding: "20px", width: "30%" }}>
        <Input
          props={{
            label: "Label",
            placeholder: "Text",
            message: "Error messsage",
          }}
          error
        ></Input>
      </div>
      <div style={{ padding: "20px", width: "30%" }}>
        <Input
          props={{
            label: "Label",
            placeholder: "Text",
            message: "Success messsage",
          }}
          success
        ></Input>
      </div>
      <div style={{ padding: "20px", width: "30%", height: "200px" }}>
        <Textarea
          props={{
            label: "Label",
            placeholder: "Text",
          }}
        ></Textarea>
      </div>
      <div style={{ padding: "20px", width: "30%", height: "200px" }}>
        <Textarea
          props={{
            label: "Label",
            placeholder: "Text",
            required: "*",
          }}
        ></Textarea>
      </div>
      <div
        style={{
          padding: "20px",
          width: "30%",
          height: "200px",
          marginBottom: "20px",
        }}
      >
        <Textarea
          props={{
            label: "Label",
            placeholder: "Text",
            message: "Error message",
          }}
          error
        ></Textarea>
      </div>
      <div
        style={{
          padding: "20px",
          width: "30%",
          height: "200px",
          marginBottom: "20px",
        }}
      >
        <Textarea
          props={{
            label: "Label",
            placeholder: "Text",
            message: "Success message",
          }}
          success
        ></Textarea>
      </div>
    </>
  );
};

export default docs;
