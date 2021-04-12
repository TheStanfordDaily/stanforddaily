import React from "react";
import { FONTS, STANFORD_COLORS, BREAKPOINTS } from "helpers/constants";
import css from "@emotion/css";

// Donation form that appears on homepage (not currently enabled)
// and at the end of posts on the site

// https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/#recurring-payment-variables
const DonationForm: React.ElementType = ({
  bannerLocation,
  currentPageUrl,
  large = true,
}) => {
  const [isRecurring, setIsRecurring]: [
    boolean,
    (boolean) => void,
  ] = React.useState(false);

  // const recurringForm = React.createRef<HTMLFormElement>();

  const notes = `From ${bannerLocation} at ${currentPageUrl}`;
  return large ? (
    <div>
      {/* <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        onSubmit={event => {
          if (isRecurring) {
            recurringForm.current.submit();
            event.preventDefault();
          }
        }}
      >
        <input type="hidden" name="business" value="coo@stanforddaily.com" />
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="item_name" value="Stanford Daily Donation" />
        <input type="hidden" name="item_number" value={notes} />
        <input type="hidden" name="currency_code" value="USD" /> */}
      <a
        href="/donate/"
        style={{
          ...FONTS.AUXILIARY,
          borderRadius: 0,
          lineHeight: "30px",
          backgroundColor: STANFORD_COLORS.CARDINAL_RED,
          display: "inlineBlock",
          cursor: "pointer",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
          outline: 0,
          padding: 10,
          textDecoration: "none",
        }}
        css={css`
          color: white;
          &:hover {
            background-color: #54100b !important;
            color: white !important;
          }
          &:visited {
            color: white;
          }
        `}
      >
        Donate
      </a>
      {/* <select
          name="amount"
          onChange={event => {
            setAmount(event.target.value);
          }}
          style={{
            width: 100,
            marginLeft: 20,
            height: 40,
            fontSize: 15,
            border: `3px solid ${STANFORD_COLORS.CARDINAL_RED}`,
            verticalAlign: "top",
          }}
        >
          {" "}
          {/* Options to appear in dropdown as ordered below, with none selected to start 
          <option value="">Select amount</option>
          <option value="50">$50</option>
          <option value="100">$100</option>
          <option value="200">$200</option>
          <option value="500">$500</option>
          <option value="">Other</option>
        </select>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <label htmlFor="monthlyDonation">
            <input
              type="checkbox"
              id="monthlyDonation"
              value=""
              style={{
                marginRight: 10,
              }}
              onChange={event => {
                setIsRecurring(!isRecurring);
              }}
            />
            Make a monthly donation. Awesome!
          </label>
        </div>
        <img
          alt=""
          width="1"
          height="1"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          style={{ display: "none" }}
        />
      </form>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        ref={recurringForm}
      >
        <input type="hidden" name="business" value="coo@stanforddaily.com" />
        <input type="hidden" name="cmd" value="_xclick-subscriptions" />
        <input type="hidden" name="item_name" value="Stanford Daily Donation" />
        <input type="hidden" name="item_number" value={notes} />
        <input type="hidden" name="custom" value={notes} />
        <input type="hidden" name="no_note" value="1" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="hidden" name="src" value="1" />
        <input type="hidden" name="a3" value={amount} />
        <input type="hidden" name="p3" value="1" />
        <input type="hidden" name="t3" value="M" />
      </form> */}
    </div>
  ) : (
    <>
      {/* <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        onSubmit={event => {
          if (isRecurring) {
            recurringForm.current.submit();
            event.preventDefault();
          }
        }}
      >
        <input type="hidden" name="business" value="coo@stanforddaily.com" />
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="item_name" value="Stanford Daily Donation" />
        <input type="hidden" name="item_number" value={notes} />
        <input type="hidden" name="currency_code" value="USD" />
        <div
          css={css`
            @media print {
              display: none;
            }
          `}
          >*/}
      <div
        style={{
          backgroundColor: "#54100b",
          width: "100%",
          color: STANFORD_COLORS.WHITE,
          padding: "15px 0",
          textAlign: "center",
          fontSize: "200%",
          ...FONTS.SECTION_TITLE,
        }}
      >
        <a
          href="https://givebutter.com/h0CJIU/"
          style={{
            textDecoration: "none",
            border: "none",
            borderRadius: 0,
            backgroundColor: "#54100b",
            marginTop: 5,
            marginBottom: 10,
            cursor: "pointer",
            outline: 0,
            color: STANFORD_COLORS.WHITE,
            fontSize: "200%",
            ...FONTS.SECTION_TITLE,
          }}
        >
          We need your help: All banner donations made today will support The Daily's new staff financial aid program.{" "}
          <br
            css={css`
              display: none;
              @media (max-width: ${BREAKPOINTS.TABLET}px) {
                display: block;
              }
            `}
          />
          <span style={{ color: "#FF9999" }}>
            Learn more and donate.
          </span>
          <br
            css={css`
              display: none;
              @media (max-width: ${BREAKPOINTS.TABLET}px) {
                display: block;
              }
            `}
          />
          <br
            css={css`
              display: none;
              @media (max-width: ${BREAKPOINTS.TABLET}px) {
                display: block;
              }
            `}
          />
          <span
            css={css`
              @media (max-width: ${BREAKPOINTS.TABLET}px) {
                display: none;
              }
            `}
            style={{
              borderRight: "2px solid #FF9999",
              paddingTop: "0.8vw",
              paddingBottom: "0.8vw",
              paddingLeft: 12.5,
              marginRight: 2.5,
            }}
          ></span>
        </a>
        {/* <select
              name="amount"
              onChange={event => {
                setAmount(event.target.value);
              }}
              style={{
                width: 125,
                marginLeft: 8,
                marginRight: 8,
                height: 30,
                fontSize: 15,
                border: `3px solid ${STANFORD_COLORS.CARDINAL_RED}`,
                verticalAlign: "center",
              }}
            >
              <option value="">Select amount</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
              <option value="200">$200</option>
              <option value="500">$500</option>
              <option value="">Other</option>
            </select>
            <label
              htmlFor="monthlyDonation"
              style={{
                fontSize: "200%",
                ...FONTS.SECTION_TITLE,
              }}
            >
              <input
                type="checkbox"
                id="monthlyDonation"
                value=""
                style={{
                  marginRight: 10,
                }}
                onChange={event => {
                  setIsRecurring(!isRecurring);
                }}
              />
              Make a monthly donation. Awesome!
              </label>*/}
        <a
          href="https://givebutter.com/h0CJIU"
          style={{
            ...FONTS.AUXILIARY,
            border: `2px solid ${STANFORD_COLORS.WHITE}`,
            borderRadius: 0,
            marginLeft: 10,
            marginRight: 10,
            lineHeight: "30px",
            height: 80,
            display: "inlineBlock",
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 1,
            outline: 0,
            padding: 10,
            textDecoration: "none",
          }}
          css={css`
            background-color: #54100b;
            color: white;
            &:hover {
              background-color: white;
              color: black !important;
            }
            &:visited {
              color: white;
            }
          `}
        >
          Donate
        </a>
      </div>
      {/*
          <img
            alt=""
            width="1"
            height="1"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            style={{ display: "none" }}
          />
        </div> */}
      {/* <a
          href="/donate/"
          style={{
            ...FONTS.AUXILIARY,
            border: "none",
            borderRadius: 0,
            backgroundColor: STANFORD_COLORS.CARDINAL_RED,
            color: STANFORD_COLORS.WHITE,
            paddindLeft: 20,
            paddindRight: 20,
            lineHeight: "40px",
            height: 40,
            display: "inlineBlock",
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 1,
            outline: 0,
          }}
        >
          Support The Daily
        </a> */}
      {/* </form>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        ref={recurringForm}
      >
        <input type="hidden" name="business" value="coo@stanforddaily.com" />
        <input type="hidden" name="cmd" value="_xclick-subscriptions" />
        <input type="hidden" name="item_name" value="Stanford Daily Donation" />
        <input type="hidden" name="item_number" value={notes} />
        <input type="hidden" name="custom" value={notes} />
        <input type="hidden" name="no_note" value="1" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="hidden" name="src" value="1" />
        <input type="hidden" name="a3" value={amount} />
        <input type="hidden" name="p3" value="1" />
        <input type="hidden" name="t3" value="M" />
      </form> */}
    </>
  );
};

export default DonationForm;
