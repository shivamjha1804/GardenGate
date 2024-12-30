import React from "react";
import upi from "../../assets/Payment/upi.png";
import cred from "../../assets/Payment/cred.png";
import phonepe from "../../assets/Payment/phonepe.png";
import paytm from "../../assets/Payment/paytm.png";
import gpay from "../../assets/Payment/gpay.png";

const FooterPayment = () => {
  return (
    <div
      className="flex flex-wrap  justify-center items-center gap-6 py-4 border-y-2 border-gray-300 "
      style={{ background: "#ECFBE8" }}
    >
      <img
        src={upi}
        alt="UPI"
        className="h-10 w-auto  transition-transform duration-200"
      />
      <img
        src={gpay}
        alt="Google Pay"
        className="h-10 w-auto  transition-transform duration-200"
      />
      <img
        src={phonepe}
        alt="PhonePe"
        className="h-10 w-auto  transition-transform duration-200"
      />
      <img
        src={cred}
        alt="CRED"
        className="h-10 w-auto  transition-transform duration-200"
      />
      <img
        src={paytm}
        alt="Paytm"
        className="h-10 w-auto  transition-transform duration-200"
      />
    </div>
  );
};

export default FooterPayment;
