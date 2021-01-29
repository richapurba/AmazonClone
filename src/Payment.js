import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
	  const getClientSecret = async () => {
		  const response = await axios
	  }
  }, [basket])

  const handleSubmit = async (event) => {
	  event.preventDefault();
	  setProcessing(true);
	  // const payload = await stripe
  }
 
  const handleChange = event => {
	  setDisabled(event.empty);
	  setError(event.error ? event.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Mountain view Lakes</p>
            <p>Pasadena, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items an delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
			  <div className="payment__priceContainer">
			  	<CurrencyFormat
				  renderText={(value) => (
					  <h3>Order Total: {value}</h3>
				  )}
				  decimalScale={2}
				  value={getBasketTotal(basket)}
				  displayType={"text"}
				  thousandSeparator={true}
				  prefix={"$"}
				/>
				<button disabled={processing || disabled || succeeded}>
					<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
				</button>
			  </div>
			  {/* Errors */}
			  {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;