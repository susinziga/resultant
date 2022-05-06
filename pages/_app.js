import { useState, useEffect } from "react";

import Footer from "../components/footer/Footer";
import Head from "next/head";
import Menu_top from "../components/menu_top/Menu_top";
import "../styles/globals.css";
import "../styles/root.css";
import "../styles/common.css";
import "../styles/scrollbar.css";
import styled from "styled-components";

import TagManager from "react-gtm-module";

import { useRouter } from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import withData from "../utils/apollo";
import AktualnoProvider from "../context/aktualnoContext";

// import * as klaro from "klaro";
// import CookieConsent from "react-cookie-consent";

const tagManagerArgs = {
  gtmId: "GTM-TJL8898",
};

function MyApp({ Component, pageProps, apollo }) {
  const [size, setSize] = useState([]);

  const { pathname, locale } = useRouter();
  useEffect(() => {
    if (pathname == "/aktualno" && locale == "en") {
      window.location = "/en";
    }
    TagManager.initialize(tagManagerArgs);
    window.addEventListener("resize", setSizes);

    let klaro = require("klaro");

    const klaroConfig = {
      translations: {
        en: {
          googleAnalytics: {
            title: "Google Analytics",
            description:
              "The analytics service ran by a most definitely non-evil company.",
          },
          purposes: {
            analytics: "Analytics",
          },
        },
        sl: {
          consentModal: {
            title: "Podrobnosti piškotkov",
            description: "neki tu ka te jas vem",
          },
          purposeItem: {
            service: "storitev",
          },
          service: {
            purpose: "Namen",
          },
          googleAnalytics: {
            title: "Google Analitika",
            description: "Analitika je usluga, ki je izdelana za najboljše.",
          },
          purposes: {
            analytics: "Analitika",
          },
          consentNotice: {
            description: "Sporočanje o uporabi piškotkov",
            learnMore: "Več o analitiki",
          },
          decline: "Prekliči",
          ok: "Potrdi",
          acceptSelected: "Potrdi izbrane",
          poweredBy: "Poganja Unreal Engine 5",
        },
      },
      apps: [
        {
          name: "googleAnalytics",
          purposes: ["analytics"],
        },
      ],
    };

    window.klaro = klaro;
    window.klaroConfig = klaroConfig;
    klaro.setup(klaroConfig);

    return () => window.removeEventListener("resize", setSizes);
  }, []);

  const setSizes = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };
  return (
    <AktualnoProvider>
      <div>
        <Head>
          <title>Resultant</title>
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />

          <script
            async
            type="text/plain"
            data-type="application/javascript"
            data-name="google-analytics"
            data-src="https://www.googletagmanager.com/gtag/js?id=G-XEKV433CCH"
          ></script>
          <script
            type="text/plain"
            data-type="application/javascript"
            data-name="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XEKV433CCH', { page_path: window.location.pathname });
                        `,
            }}
          />
        </Head>
        <Menu_top size={size}></Menu_top>
        <Body_content id="__body" path={pathname}>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
          {/* <CookieConsent
            location="bottom"
            buttonText="ide gas"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
            onAccept={(acceptedByScrolling) => {
              if (acceptedByScrolling) {
                // triggered if user scrolls past threshold
                alert("Accept was triggered by user scrolling");
              } else {
                alert("Accept was triggered by clicking the Accept button");
              }
            }}
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent> */}
        </Body_content>
        <Footer></Footer>
      </div>
    </AktualnoProvider>
  );
}

const Body_content = styled.div`
  padding-top: 110px;

  @media (min-width: 992px) {
    padding-top: 130px;
  }

  ${(props) => (props.path === "/" ? "padding-top:0 !important;" : "")}
`;

export default withData(MyApp);
