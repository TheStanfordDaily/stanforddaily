import React from "react";
import RView from "emotion-native-media-query";

export const CovidDataWidget: React.ElementType = ({
  style,
  mobile = false,
}) => {
  return (
    <RView style={style}>
      <div>
        <div
          dir="auto"
          style={{
            fontFamily: "IBM Plex Sans Condensed, sans-serif",
            lineHeight: "1em",
            textTransform: "uppercase",
          }}
        >
          <a
            title="COVID-19"
            style={{ color: "inherit" }}
            href="https://www.stanforddaily.com/2020/10/11/tracking-covid-19-at-stanford/"
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
              COVID-19
            </h1>
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          {" "}
          <h2
            style={{
              fontFamily: "Libre Baskerville, sans-serif",
              fontWeight: "bold",
              fontSize: "15px",
              lineHeight: "normal",
              margin: 0,
              marginTop: "5px",
              marginBottom: "5px",
              textAlign: "center",
            }}
          >
            {" "}
            <a
              title="Tracking COVID-19 at Stanford"
              style={{ color: "inherit" }}
              href="https://www.stanforddaily.com/2020/10/11/tracking-covid-19-at-stanford/"
            >
              Tracking COVID-19 at Stanford
            </a>
          </h2>
        </div>
        <div
          className=" tracking-boxes"
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <div
            className=" tracking-box"
            style={{
              width: "30%",
              height: "18vh",
              backgroundColor: "#fef2f1",
              textAlign: "center",
              paddingTop: "2%",
            }}
          >
            <div
              style={{
                fontSize: "1.75vh",
                lineHeight: "normal",
                paddingBottom: "1vh",
                height: "45%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Undergrads and grad students
            </div>
            <div>
              <strong style={{ fontSize: "3vh" }}>
                137<strong></strong>
              </strong>
            </div>
            <div style={{ fontSize: "1.75vh", lineHeight: "normal" }}>
              <span>
                Last week
                <br />
                +54
              </span>{" "}
              <span style={{ color: "#585858" }}>▲</span>
            </div>
          </div>
          <div
            className=" tracking-box"
            style={{
              width: "30%",
              height: "18vh",
              backgroundColor: "#fef2f1",
              textAlign: "center",
              paddingTop: "2%",
            }}
          >
            <div
              style={{
                height: "45%",
                display: "flex",
                alignItems: "center",
                fontSize: "1.75vh",
                lineHeight: "normal",
                paddingBottom: "1vh",
              }}
            >
              Faculty, staff and postdocs
            </div>
            <div>
              <strong style={{ fontSize: "3vh" }}>
                104<strong></strong>
              </strong>
            </div>
            <div style={{ fontSize: "1.75vh", lineHeight: "normal" }}>
              <span>
                Last week
                <br />
                +25
              </span>{" "}
              <span style={{ color: "#585858" }}>▲</span>
            </div>
          </div>
          <div
            className=" tracking-box"
            style={{
              width: "30%",
              height: "18vh",
              backgroundColor: "#fef2f1",
              textAlign: "center",
              paddingTop: "2%",
            }}
          >
            <div
              style={{
                fontSize: "1.75vh",
                lineHeight: "normal",
                paddingBottom: "1vh",
                height: "45%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Stanford Health Care workers
            </div>
            <div>
              <strong style={{ fontSize: "3vh" }}>1244</strong>
            </div>
            <div style={{ fontSize: "1.75vh", lineHeight: "normal" }}>
              <span>
                Last week
                <br />
                +93
              </span>{" "}
              <span style={{ color: "#585858" }}>▼</span>
            </div>
          </div>
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
        Cumulative positive test results. Arrows indicate whether the stated
        week’s new positives are greater or less than new positives the previous
        week.
      </div>
    </RView>
  );
};
