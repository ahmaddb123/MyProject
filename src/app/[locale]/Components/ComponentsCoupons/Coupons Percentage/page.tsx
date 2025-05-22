import React from "react";
import "./CouponsPercentage.css";

type Coupon = {
  name: string;
  code: string;
};

type Props = {
  setCoupons: (value: number) => void;
  coupon: Coupon;
};


function CouponsPercentage({ setCoupons, coupon }: Props) {
  return (
    <div className="CouponsPercentage">
      <h1>Coupons Percentage</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="ci">
          <div className="container-input">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" value={coupon.name} readOnly />
            </div>
            <div>
              <label htmlFor="">account name</label>
              <input type="text" placeholder="**/**" />
            </div>
            <div>
              <label htmlFor="">Link</label>
              <input type="text" placeholder="**/**" readOnly/>
            </div>
          </div>
          <div className="container-input">
            <div>
              <label htmlFor="">Code</label>
              <input type="text" placeholder="NK4" value={coupon.code} readOnly/>
            </div>
            <div>
              <label htmlFor="">IBAN number</label>
              <input type="text" placeholder="SA98734982374983274982374" />
            </div>
            <div>
              <label htmlFor="">Percentage</label>
              <input type="text" placeholder="50%" />
            </div>
          </div>
        </div>
        <div className="container-btn">
          <button type="submit">Save</button>
          <button type="button" onClick={() => setCoupons(4)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CouponsPercentage;
