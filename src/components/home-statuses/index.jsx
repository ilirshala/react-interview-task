import { Card } from "antd";
import React from "react";
import StatusCard from "../status-card";
import "./style.css";

const HomeStatuses = () => {
  return (
    <Card className="home-statuses" bordered={false}>
      <StatusCard status="onRoad" />
      <StatusCard status="Completed" />
      <StatusCard status="onHold" />
    </Card>
  );
};

export default HomeStatuses;
