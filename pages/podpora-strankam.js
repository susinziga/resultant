import Head from "next/head";
import React from "react";
import Support_support from "../components/support/Support_support";

const support = () => {
  return (
    <>
      <Head>
        <title>Podpora strankam | Resultant</title>
        <meta
          name="description"
          content="Skrb za zadovoljstvo strank je naša ključna vrednota in cilj. Zato si prizadevamo, da bi projekte in rešitve uspešno izpeljali in zadovoljili vaša pričakovanja."
        />
      </Head>
      <Support_support className="section"></Support_support>
    </>
  );
};

export default support;
