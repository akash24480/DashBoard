import React from "react";
import { FaBtc, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import Title from "./Title";

const data = [
  {
    name: "Crypto",
    account: "akash19g245@gmail.com",
    amount: "85,345.00",
    icon: (
      <div className="w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-full">
        <FaBtc size={26} />
      </div>
    ),
  },
  {
    name: "Visa Debit Card",
    account: "2463********8473",
    amount: "15,345.00",
    icon: (
      <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
        <RiVisaLine size={26} />
      </div>
    ),
  },
  {
    name: "MasterCard",
    account: "6785********8473",
    amount: "55,345.00",
    icon: (
      <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center rounded-full">
        <FaCcMastercard size={26} />
      </div>
    ),
  },
  {
    name: "Paypal",
    account: "akash19g245@gmail.com",
    amount: "35,345.00",
    icon: (
      <div className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-full">
        <FaPaypal size={26} />
      </div>
    ),
  },
];

const Account = () => {
  return (
    <>
      <div className="mt-20 md:mt-0 py-5 md:py-20 md:w-1/3">
        <Title title={"Account"} />
        <span className="text-sm text-gray-600 dark:text-gray-500">
          View All your accounts
        </span>
        <div className="w-full">
          {data.map((item, index) => (
            <div className="flex items-center justify-between gap-6 mt-6">
              <div className="flex items-center gap-4">
                {item.icon}
                <div>
                  <p className="text-black dark:text-gray-400 text-lg">
                    {item.name}
                  </p>
                  <span className="text-gray-600">{item.account}</span>
                </div>
              </div>
              <div>
                <p className="text-xl text-black dark:text-gray-400 font-medium">
                  ${item.amount}
                </p>
                <span className="text-sm text-gray-600 dark:text-violet-700">
                  Account Balance
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;
