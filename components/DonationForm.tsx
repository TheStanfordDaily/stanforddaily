import React from "react";
import { FONTS, STANFORD_COLORS } from "helpers/constants";

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
  const [amount, setAmount]: [string, (string) => void] = React.useState("50");

  const recurringForm = React.createRef<HTMLFormElement>();

  const notes = `From ${bannerLocation} at ${currentPageUrl}`;
  return large ? (
    <>
      <form
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
        <button
          type="submit"
          name="submit"
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
        </button>
        <select
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
          {/* Options to appear in dropdown as ordered below, with $50 selected to start */}
          <option value="50">$50</option>
          <option value="200">$200</option>
          <option value="1000">$1,000</option>
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
            Make my donation a monthly donation.
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
      </form>
    </>
  ) : (
    <>
      <form
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
        <div>
          <div
            style={{
              backgroundColor: "#54100b",
              width: "100%",
              color: "white",
              padding: "15px 0",
              textAlign: "center",
              fontSize: "200%",
              ...FONTS.SECTION_TITLE,
            }}
          >
            <button
              type="submit"
              name="submit"
              style={{
                border: "none",
                borderRadius: 0,
                backgroundColor: "#54100b",
                marginTop: 5,
                marginBottom: 10,
                cursor: "pointer",
                outline: 0,
                color: "white",
                fontSize: "200%",
                ...FONTS.SECTION_TITLE,
              }}
            >
              The Daily is an independent nonprofit hit hard by COVID-19.{" "}
              <span style={{ color: "#FF9999" }}>
                Support our student journalism today.
              </span>
            </button>
            <select
              name="amount"
              onChange={event => {
                setAmount(event.target.value);
              }}
              style={{
                width: 100,
                marginLeft: 10,
                marginRight: 10,
                height: 30,
                fontSize: 15,
                border: `3px solid ${STANFORD_COLORS.CARDINAL_RED}`,
                verticalAlign: "top",
              }}
            >
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
              Make your donation monthly.
            </label>
          </div>

          <img
            alt=""
            width="1"
            height="1"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            style={{ display: "none" }}
          />
        </div>
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
      </form>
    </>
  );
};

export default DonationForm;
