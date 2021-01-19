import React from "react";
import "./Payment.css";
import {useStateValue} from "./StateProvider";

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Mountainview Lane</p>
            <p>Pasadena, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items"></div>
        </div>
        <div className="payment__section"></div>
      </div>
    </div>
  );
}

export default Payment;