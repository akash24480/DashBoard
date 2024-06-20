import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Title from "./Title";

const Chart = () => {
  const data = [
    {
      label: "January",
      income: 5000,
      expense: 3000,
    },
    {
      label: "Febrauray",
      income: 5800,
      expense: 3100,
    },
    {
      label: "March",
      income: 5000,
      expense: 2000,
    },
    {
      label: "April",
      income: 5000,
      expense: 2500,
    },
    {
      label: "May",
      income: 7000,
      expense: 3900,
    },
    {
      label: "June",
      income: 5200,
      expense: 3600,
    },
    {
      label: "July",
      income: 4900,
      expense: 3200,
    },
    {
      label: "Agust",
      income: 4700,
      expense: 3100,
    },
    {
      label: "September",
      income: 5100,
      expense: 3200,
    },
    {
      label: "October",
      income: 5400,
      expense: 2700,
    },
    {
      label: "November",
      income: 6000,
      expense: 3100,
    },
    {
      label: "December",
      income: 4000,
      expense: 2000,
    },
  ];

  return (
    <>
      <div className="w-full md:w-2/3">
        <Title title={"Transction Activity"} />
        <ResponsiveContainer width={"100%"} height={500} className={"mt-5"}>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray={"3 3"} />
            <YAxis />
            <XAxis />
            <Legend />
            <Tooltip />
            <Line type={"monotone"} dataKey={"income"} stroke="#8884d8" />
            <Line type={"monotone"} dataKey={"expense"} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
