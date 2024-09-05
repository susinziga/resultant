import Head from "next/head";
import React from "react";
import Privacy_privacy from "../components/privacy/Privacy_privacy";

const privacy = () => {
  return (
    <>
      <Head>
        <title>Pravilnik o zasebnosti | Resultant</title>
        <meta
          name="description"
          content="S pravilnikom o zasebnosti vas na pregleden, razumljiv in preprost način seznanjamo z varstvom osebnih podatkov in pravnim obvestilom."
        />
      </Head>
      <Privacy_privacy className="section"></Privacy_privacy>
    </>
  );
};

export default privacy;
