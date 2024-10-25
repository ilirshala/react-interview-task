import { Card } from "antd";
import React from "react";
import StatusCard from "../status-card";
import "./style.css";
import { useSelector } from "react-redux";

const HomeStatuses = () => {
  const { jobsites } = useSelector((state) => state.jobsites);
  return (
    <Card className="home-statuses" bordered={false}>
      <StatusCard
        status="on_road"
        itemsLength={
          jobsites?.filter(
            (jobsite) => jobsite?.status?.toLowerCase() === "on_road"
          )?.length
        }
      />
      <StatusCard
        status="Completed"
        itemsLength={
          jobsites?.filter(
            (jobsite) => jobsite?.status?.toLowerCase() === "completed"
          )?.length
        }
      />
      <StatusCard
        status="on_hold"
        itemsLength={
          jobsites?.filter(
            (jobsite) => jobsite?.status?.toLowerCase() === "on_hold"
          )?.length
        }
      />
    </Card>
  );
};

export default HomeStatuses;
