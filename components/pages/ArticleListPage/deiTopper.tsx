import React from "react";
import css from "@emotion/css";
import { DesktopRow } from "../HomePage/DesktopRow";
import { getBorderValue } from "../HomePage/getBorderValue";
import { FOCUS_STATES } from "helpers/constants";
import { TextButtonWithLink } from "../../TextButtonWithLink";

export function deiTopper() {
  return (
    <>
      <DesktopRow
        style={{
          ...getBorderValue("Bottom"),
          backgroundColor: "#f4cccc",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "50%" }}
              src="https://wp.stanforddaily.com/wp-content/uploads/2021/04/dei-header-red-1.png"
              alt="Graphic featuring the text 'DEI at The Daily'"
            />
          </div>
          <div
            style={{
              width: "50%",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              Introducing The Daily’s DEI team
            </h2>
            <p style={{ fontSize: 16 }}>
              We’re The Daily’s inaugural Diversity, Equity and Inclusion (DEI)
              team co-chairs, and we’re excited to announce the creation of the
              team and the initiatives we’re working on. The DEI team is charged
              with spearheading the push to improve diversity and equity within
              the paper’s newsroom, as well as supporting our community outreach
              efforts. The team was born out of discussions on issues of equity
              in journalism held by staffers over winter break, and it embodies
              our commitment to seeing those conversations translate into
              structural changes at The Daily.
            </p>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-around",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSePrigvQi85U4JB4g5WVltuoZsL5A-xAzqg9zhytsNkpjPbQA/viewform"
              css={css`
                ${FOCUS_STATES.BLACK_OUTLINE}
              `}
            >
              <img
                style={{ width: "256px", height: "147.5px" }}
                src="https://wp.stanforddaily.com/wp-content/uploads/2021/04/dei-feedback-form.png"
                alt="Graphic for DEI feedback form"
              />
            </a>
            <a
              href="/join/"
              css={css`
                ${FOCUS_STATES.BLACK_OUTLINE}
              `}
            >
              <img
                style={{ width: "256px", height: "147.5px" }}
                src="https://wp.stanforddaily.com/wp-content/uploads/2021/04/dei-join-tsd.png"
                alt="Graphic for Join The Daily link"
              />
            </a>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-around",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <TextButtonWithLink
              url="/opportunity-fellowship/"
              title="Opportunity Fellowship (need-based financial aid for Daily staffers)"
              tbwlStyle={{
                width: "256px",
                borderColor: "black",
                lineHeight: "normal",
                textTransform: "none",
              }}
              cssContent={`
                background-color: #8c1515 !important;
                color: white !important;
                &:hover,
                &:focus-visible {
                  color: #8c1515 !important;
                  background-color: white !important;
                }
                `}
            />
            <TextButtonWithLink
              url="https://forms.gle/weKJNM8YkjnBJdnm8"
              title="Reimbursements for staffers' professional journalism affinity org fees"
              tbwlStyle={{
                width: "256px",
                borderColor: "black",
                lineHeight: "normal",
                textTransform: "none",
              }}
              cssContent={`
                background-color: #8c1515 !important;
                color: white !important;
                &:hover,
                &:focus-visible {
                  color: #8c1515 !important;
                  background-color: white !important;
                }
                `}
            />
          </div>
          <div
            style={{
              width: "50%",
              padding: "5px",
              backgroundColor: "white",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "auto",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://stanforddaily.com/daily-staffer-demographics-by-volume/"
              style={{ textDecoration: "none" }}
              css={css`
                ${FOCUS_STATES.BLACK_OUTLINE}
              `}
            >
              <h2 style={{ textAlign: "center" }}>
                Vol. 259 staff demographics survey results
              </h2>
              <h3 style={{ textAlign: "center" }}>
                Click for results from other questions
              </h3>
            </a>
            <iframe
              src="https://flo.uri.sh/visualisation/6644830/embed"
              title="Interactive or visual content"
              className="flourish-embed-iframe"
              frameBorder="0"
              scrolling="no"
              style={{ width: "100%", height: "600px" }}
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
            <div
              style={{
                width: "100%!",
                marginTop: "4px!important",
                textAlign: "right",
              }}
            >
              <a
                css={css`
                  ${FOCUS_STATES.BLACK_OUTLINE}
                `}
                className="flourish-credit"
                href="https://public.flourish.studio/visualisation/6644830/?utm_source=embed&utm_campaign=visualisation/6644830"
                target="_top"
                style={{ textDecoration: "none!important" }}
                rel="noopener noreferrer"
              >
                <img
                  alt="Made with Flourish"
                  src="https://public.flourish.studio/resources/made_with_flourish.svg"
                  style={{
                    width: "105px!important",
                    height: "16px!important",
                    border: "none!important",
                    margin: "0!important",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </DesktopRow>
      <h2 style={{ fontSize: 25, marginBottom: 0 }}>
        DEI updates and work from the Equity Project
      </h2>
      <p style={{ fontSize: 16, marginTop: 2 }}>
        Not familiar with the Equity Project?{" "}
        <a
          css={css`
            ${FOCUS_STATES.BLACK_OUTLINE}
          `}
          href="https://www.stanforddaily.com/equity-project-section-guide/"
        >
          Learn more!
        </a>
      </p>
    </>
  );
}
