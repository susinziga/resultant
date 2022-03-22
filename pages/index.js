import Head from "next/head";
import Image from "next/image";
import Button from "../basic_components/button/Button";
import Input from "../basic_components/input/Input";

/*
  INPUT COMPONENT 

  props:  label --> Naslov inputa
          placeholder ...
          messege --> Podaj le v primeru neke akcije( zraven se se doda styled prop ; success ; error)

  styled-props: error --> doda rdeč outline in error messege spodaj  
                sucess --> doda poljuben zelen sucess messege

*/

export default function Home() {
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
    </>
  );
}
