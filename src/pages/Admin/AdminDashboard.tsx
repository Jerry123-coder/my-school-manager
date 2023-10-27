import React, { useEffect, useState } from "react";
import NumberStatsCard from "../../components/NumberStatsCard";

import { PiStudentFill } from "react-icons/pi";
import { ImUserTie } from "react-icons/im";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import EarningsGraph from "../../components/EarningsGraph";
import { Chart } from "react-chartjs-2";
import LineChart from "../../components/LineChart";
import ExpenseBarChart from "../../components/ExpenseBarChart";
import SchoolRatioChart from "../../components/SchoolRatioChart";
import Calendar from "../../components/MyCalendar";
import MyCalendar from "../../components/MyCalendar";
import NoticeBoard from "../../components/NoticeBoard";

const AdminDashboard = () => {


  return (
    <div className="p-24 bg-[#a2d9fd] overflow-y-auto">
      <div className="grid grid-cols-4 gap-6">
        <NumberStatsCard
          // icon={<PiStudentFill />}
          iconColor="#00CC00"
          cardColor="#99FF99"
          cardItem="Students"
          number={60000}
        />
        <NumberStatsCard
          // icon={<ImUserTie />}
          iconColor="#4D4DFF"
          cardColor="#ccd9ff"
          cardItem="Teachers"
          number={500}
        />
        <NumberStatsCard
          // icon={<FaUser />}
          iconColor="#ff9400"
          cardColor="#FFDB99"
          cardItem="Parents"
          number={1800}
        />
        <NumberStatsCard
          // icon={<FaMoneyCheckDollar />}
          iconColor="#FF3333"
          cardColor="#FFB3B3"
          cardItem="Earnings"
          number={18000}
        />
      </div>
      <div className="grid grid-cols-4 w-full gap-5 mt-10">
        <div className="col-span-2 h-[28rem]  bg-slate-200 rounded-lg glass" >
          <EarningsGraph />
        </div>
        <div className="col-span-1 h-[28rem] bg-slate-200 rounded-lg glass">
          <ExpenseBarChart />
        </div>
        <div className="col-span-1 h-[28rem] bg-slate-200 rounded-lg glass">
          <SchoolRatioChart />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-5 mt-10 ">
        <div className="col-span-1 h-[35rem]  bg-slate-200 rounded-lg glass">
          <MyCalendar />
        </div>
        <div className="col-span-1 h-[35rem] bg-slate-200 rounded-lg glass">
          <NoticeBoard />
        </div>
        {/* <div className="col-span-1 h-[25rem] bg-slate-200 rounded-lg">
          Third Div
        </div> */}
      </div>

      {/* <EarningsGraph /> */}
    </div>
  );
};

export default AdminDashboard;
