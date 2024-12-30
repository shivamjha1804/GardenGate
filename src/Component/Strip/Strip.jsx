import React from "react";
import moneyIcon from "../../assets/Strip/Money.png";
import customerCareIcon from "../../assets/Strip/customer.png";
import freeShippingIcon from "../../assets/Strip/Free Shipping.png";

const Strip = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-evenly items-center mt-6 bg-gray-100 border-y-2 border-gray-200 ">
      {/* Free Shipping */}
      <div className="flex items-center space-x-4 px-4 py-2 w-full sm:w-auto max-w-xs sm:max-w-none">
        <img
          src={freeShippingIcon}
          alt="Free Shipping"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        <div>
          <p className="text-sm sm:text-lg font-bold text-gray-800 text-center sm:text-left">
            FREE EXPRESS SHIPPING
          </p>
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            Free shipping on purchase over $50
          </p>
        </div>
      </div>

      {/* Online Support */}
      <div className="flex items-center space-x-4 px-4 py-2 w-full sm:w-auto max-w-xs sm:max-w-none">
        <img
          src={customerCareIcon}
          alt="Customer Care"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        <div>
          <p className="text-sm sm:text-lg font-bold text-gray-800 text-center sm:text-left">
            ONLINE SUPPORT 24/7
          </p>
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            Support available 24 hours a day
          </p>
        </div>
      </div>

      {/* Money Return */}
      <div className="flex items-center space-x-4 px-4 py-2 w-full sm:w-auto max-w-xs sm:max-w-none">
        <img
          src={moneyIcon}
          alt="Money Return"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        <div>
          <p className="text-sm sm:text-lg font-bold text-gray-800 text-center sm:text-left">
            MONEY RETURN
          </p>
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            Money back within 7 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strip;
