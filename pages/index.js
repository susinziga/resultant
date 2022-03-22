import Head from "next/head";
import Image from "next/image";
import Button from "../basic_components/button/Button";

export default function Home() {
  return (
    <div style={{ padding: "100px" }}>
      <Button primary>GUMP</Button> <Button secondary>GUMP 2</Button>
    </div>
  );
}
