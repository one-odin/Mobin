import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../../components/layout/Sidebar/Sidebar";

const DashboardPanel = () => {
  return (
    <>
      <div className="flex bg-gray-50 gap-10 py-14 px-20">
        <div className="flex-auto w-1/4">
          <Sidebar />
        </div>
        <div className="flex-auto w-3/4 bg-white min-h-screen rounded-2xl border-2 border-gray-200 p-12">
          {/* all page render in this tag */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardPanel;
