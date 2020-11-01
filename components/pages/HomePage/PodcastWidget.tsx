import React, { useEffect, useState } from "react";
import { BREAKPOINTS } from "helpers/constants";
import css from "@emotion/css";

// const SHEET_ID = "1darMs2BhXBjSRcuQYi33dKzIAgUSenZjYF9ZrRjqNiY";
// const ACCESS_TOKEN = "AIzaSyAh_wwePZswl21zxnjGaiBM0Q-yQ8miOgE";

export const PodcastWidget: React.ElementType = ({ mobile = false }) => {
  // const [stats, setStats] = useState(null);

  // async function getSheetValues() {
  //     const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/B22:B23?key=${ACCESS_TOKEN}`,
  //     {
  //     headers: {
  //         "Content-Type": "application/json",
  //     }
  //     });
  //     const data = await request.json();
  //     console.log(data);
  //     console.log(data.values[0][0]);
  //     setStats(data);
  // }

  // useEffect(() => {
  //     // Update the document title using the browser API
  //     getSheetValues(); // await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/B22:B23?key=${ACCESS_TOKEN}`,
  //     // {
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     // }
  //     // });

  // }, []);

  return (
    <section
      className="css-cliv5m"
      style={{ padding: "15px" }}
      css={
        mobile
          ? css`
              @media (min-width: ${BREAKPOINTS.TABLET}px) {
                display: none;
              }
            `
          : css`
              @media (max-width: ${BREAKPOINTS.MAX_WIDTH.TABLET}px) {
                display: none;
              }
            `
      }
    >
      <div className="css-6jlpjt">
        <div
          dir="auto"
          className="css-901oao"
          style={{
            fontFamily: "IBM Plex Sans Condensed, sans-serif",
            lineHeight: "1em",
            textTransform: "uppercase",
          }}
        >
          <a
            title="The Daily Brew"
            style={{ color: "inherit" }}
            href="https://open.spotify.com/show/2ty8gvAnvYP31X8TUrFwoj?si=cZWDWKp2SiOotNh4ZqG0xg&nd=1"
          >
            <h1
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 900,
                fontSize: "20px",
                lineHeight: "normal",
                color: "#820000",
                margin: 0,
                textTransform: "none",
              }}
            >
              Podcasts
            </h1>
          </a>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "5px",
          marginBottom: "5px",
          fontFamily: "Libre Baskerville, sans-serif",
          fontSize: "12px",
          lineHeight: "1.2em",
        }}
      >
        <iframe
          title="The Daily Brew"
          src="https://open.spotify.com/embed-podcast/show/2ty8gvAnvYP31X8TUrFwoj"
          width="100%"
          height="155"
          frameBorder="0"
          allow="encrypted-media"
        />
        Stanford students share how their relationship with their community and
        surroundings has changed due to the pandemic.
      </div>
    </section>
  );
};
