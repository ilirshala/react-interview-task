import { Card } from "antd";
import React from "react";
import BigStatusCard from "../big-status-card";
import "./style.css";

const HomeStatuses = () => {
  return (
    <Card className="home-statuses" bordered={false}>
      <BigStatusCard status="onRoad" />
      <BigStatusCard status="Completed" />
      <BigStatusCard status="onHold" />
    </Card>
  );
};

export default HomeStatuses;
