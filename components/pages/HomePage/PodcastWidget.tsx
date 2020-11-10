import React from "react";
import RView from "emotion-native-media-query";

export const PodcastWidget: React.ElementType = ({ style }) => {
  return (
    <RView style={style}>
      <div>
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
        Richard Coca '22, one of The Daily's Grind editors, adresses how COVID-19 taught him the importance of physical space.
      </div>
    </RView>
  );
};
