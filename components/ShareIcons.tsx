// check this website: https://codepen.io/lionelpaulus/pen/YGXwxrs

import React from "react";

// images of the share icons to use
import facebook from "../static/facebook.jpg";
import twitter from "../static/twitter-pic.png";
import linkedin from "../static/Linkedin.png";

// reddit image wasn't free to use on google images
import reddit from "../static/reddit.png";
import CSS from "csstype";
import css from "@emotion/css";
import { BREAKPOINTS } from "helpers/constants";

// Styles for the social share icons
const phoneView: CSS.Properties = {
  borderRadius: "50%",
  width: "35px",
};

const sharebox: CSS.Properties = {
  position: "fixed",
  textAlign: "left",
};

const icons: CSS.Properties = {
  borderRadius: "50%",
  width: "70px",
  margin: "3px",
  marginTop: "0px",
};

// The function that shares the article to the social platform
function FShare() {
  var str = window.location.href;
  document
    .getElementById("Facebook")
    .setAttribute(
      "href",
      "https://www.facebook.com/sharer.php?u=" + str + "%2F",
    );
}

function TShare() {
  var str = window.location.href;
  document
    .getElementById("Facebook")
    .setAttribute("href", "https://twitter.com/share?url=" + str + "%2F");
}

function LShare() {
  var str = window.location.href;
  document
    .getElementById("Facebook")
    .setAttribute(
      "href",
      "https://www.linkedin.com/shareArticle?url=" + str + "%2F",
    );
}

function RShare() {
  var str = window.location.href;
  document
    .getElementById("Facebook")
    .setAttribute("href", "https://reddit.com/submit?url=" + str + "%2F");
}

// Social Share Icons Widget
function ShareIcons() {
  return (
    <div
      css={css`
        @media (max-width: ${BREAKPOINTS.MAX_WIDTH.DESKTOP}px) {
          position: relative !important;
        }
      `}
    >
      <div
        className="snapchat-creative-kit-share"
        data-share-url="https://stanforddaily.com"
        data-text="false"
      ></div>
      <div style={sharebox}>
        <div>
          <h1> Share this: </h1>
          <a
            id="Facebook"
            onClick={FShare}
            // href={"https://www.facebook.com/sharer.php?u=http%3A%2F%2F" +  "%2F"}
            target="blank"
          >
            <img src={facebook} style={icons} />
          </a>
          <a
            id="Twitter"
            onClick={TShare}
            // href="https://twitter.com/share?url=https://stanforddaily.com/&text=Check out this article from%20@stanforddaily"
            target="blank"
          >
            <img src={twitter} style={icons} />
          </a>
          <a
            id="Reddit"
            onClick={RShare}
            // href="https://reddit.com/submit?url=https://stanforddaily.com&title=Check out this article from the Stanford Daily!!"
            target="blank"
          >
            <img src={reddit} style={icons} />
          </a>
          <a
            id="LinkedIn"
            onClick={LShare}
            // href="https://www.linkedin.com/shareArticle?url=https://stanforddaily.com&title=Look at this cool article&summary=I need to figure out how to add a short summary&source=https://stanforddaily.com"
            target="blank"
          >
            <img src={linkedin} style={icons} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShareIcons;
