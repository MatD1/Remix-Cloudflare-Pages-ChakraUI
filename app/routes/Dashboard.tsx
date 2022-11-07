import { Outlet } from "@remix-run/react";
import React from "react";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div>Dashboard</div>
      <Outlet />
    </React.Fragment>
  );
};

export default Dashboard;
