import React, { useEffect, useState } from "react";

//Replace these two with your own!
const SHEET_ID = "1darMs2BhXBjSRcuQYi33dKzIAgUSenZjYF9ZrRjqNiY";
const ACCESS_TOKEN = "AIzaSyAh_wwePZswl21zxnjGaiBM0Q-yQ8miOgE";

export const CovidDataWidget: React.ElementType = () => {
  const [stats, setStats] = useState(null);

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
    <section className="css-cliv5m" style={{ padding: "15px" }}>
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
            title="Opinions"
            style={{ color: "inherit" }}
            href="/category/opinions/"
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
              height: "16.5vh",
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
              }}
            >
              Undergrad and grad student positives
            </div>
            <div>
              <strong style={{ fontSize: "3vh" }}>
                33<strong></strong>
              </strong>
            </div>
            <div style={{ fontSize: "1.75vh", lineHeight: "normal" }}>
              <span>
                Last week
                <br />
                +1
              </span>{" "}
              <span style={{ color: "#585858" }}>▼</span>
            </div>
          </div>
          <div
            className=" tracking-box"
            style={{
              width: "30%",
              height: "16.5vh",
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
              }}
            >
              Faculty, staff and postdocs positives
            </div>
            <div>
              <strong style={{ fontSize: "3vh" }}>
                6<strong></strong>
              </strong>
            </div>
            <div style={{ fontSize: "1.75vh", lineHeight: "normal" }}>
              <span>
                Last week
                <br />
                +0
              </span>{" "}
              <span style={{ color: "#585858" }}>▼</span>
            </div>
          </div>
          <div
            className=" tracking-box"
            style={{
              width: "30%",
              height: "16.5vh",
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
              }}
            >
              Total tests administered
            </div>
            <div>
              <strong style={{ fontSize: "3vh" }}>33,479</strong>
            </div>
            <div style={{ fontSize: "1.75vh", lineHeight: "normal" }}>
              <span>
                Last week
                <br />
                +6,278
              </span>{" "}
              <span style={{ color: "#585858" }}>▲</span>
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
          fontSize: "10px",
          lineHeight: "normal",
        }}
      >
        Results are from Stanford's surveillance testing program. Arrows
        indicate whether last week's counts trended up or down from the previous
        week.
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
            title=" Letter to the community: Welcoming VP Chris Middleton to the ASSU exec team"
            style={{ color: "inherit" }}
            href="stanforddaily.com"
          >
            Tracking COVID-19 at Stanford
          </a>
        </h2>
      </div>
    </section>
  );
};
