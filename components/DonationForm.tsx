import React from "react";

// https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/#recurring-payment-variables
const DonationForm: React.ElementType = ({
  bannerLocation,
  currentPageUrl,
}) => {
  const [isRecurring, setIsRecurring]: [
    boolean,
    (boolean) => void,
  ] = React.useState(false);
  const [amount, setAmount]: [string, (string) => void] = React.useState("5");

  const recurringForm = React.createRef<HTMLFormElement>();

  const notes = `From ${bannerLocation} in Page: ${currentPageUrl}`;
  return (
    <>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        className="tsd-donation-form"
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
        <button className="tsd-button" type="submit" name="submit">
          Support the Daily
        </button>
        <select
          name="amount"
          className="tsd-select"
          onChange={event => {
            setAmount(event.target.value);
          }}
        >
          <option value="5">$5</option>
          <option value="10">$10</option>
          <option value="25">$25</option>
          <option value="50">$50</option>
          <option value="100">$100</option>
          <option value="500">$500</option>
          <option value="1000">$1,000</option>
        </select>

        <div
          className="checkbox"
          style={{
            marginTop: 10,
          }}
        >
          <label htmlFor="monthlyDonation">
            <input
              type="checkbox"
              id="monthlyDonation"
              className="monthlyDonation"
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
        className="tsd-donation-form-recurring"
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
