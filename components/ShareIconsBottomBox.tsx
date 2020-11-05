import React from "react";
import css from "@emotion/css";
import { BREAKPOINTS } from "helpers/constants";

// images of the share icons to use
import facebook from "C:/Users/simon/my-app/src/facebook.jpg";
import twitter from "C:/Users/simon/my-app/src/twitter-pic.png";
import linkedin from "C:/Users/simon/my-app/src/Linkedin.png";

// reddit image wasn't free to use on google images
import reddit from "C:/Users/simon/my-app/src/reddit.png";

// The function(S) that shares the article to the social platform
function FShare() {
  var str = window.location.href;
  document
    .getElementById("Facebook")
    .setAttribute(
      "href",
      "https://www.facebook.com/sharer.php?u=" +
        str +
        "&text=Check out this Stanford Article",
    );
}

function TShare() {
  var str = window.location.href;
  document
    .getElementById("Twitter")
    .setAttribute(
      "href",
      "https://twitter.com/share?url=" +
        str +
        "&text=Check out this Stanford Article",
    );
}

function LShare() {
  var str = window.location.href;
  document
    .getElementById("LinkedIn")
    .setAttribute(
      "href",
      "https://www.linkedin.com/shareArticle?url=" +
        str +
        "&title=Check out this Stanford Article",
    );
}

function RShare() {
  var str = window.location.href;
  document
    .getElementById("Reddit")
    .setAttribute(
      "href",
      "https://reddit.com/submit?url=" +
        str +
        "&title=Check out this Stanford Article",
    );
}

// Social Share Icons Widget
function ShareIcons() {
  return (
    <div
      css={css`
        img {
          margin: 3px;
          border-radius: 50%;
          width: 35px;
          display: inline;
          margin-top: -20px;
        }

        #sharebox {
          margin-top: -45px;
          position: relative;
          left: auto;
          text-align: right;
        }
      `}
    >
      <div id="sharebox">
        <div>
          <h1> Share</h1>
          <a id="Facebook" onClick={FShare} target="blank">
            <img src={facebook} />
          </a>
          <a className="icon" id="Twitter" onClick={TShare} target="blank">
            <img src={twitter} />
          </a>
          <a id="Reddit" onClick={RShare} target="blank">
            <img src={reddit} />
          </a>
          <a id="LinkedIn" onClick={LShare} target="blank">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShareIcons;
