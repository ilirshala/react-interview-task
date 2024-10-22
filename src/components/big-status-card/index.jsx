import { Card } from "antd";
import React from "react";
import "./style.css";

const BigStatusCard = ({ itemsLength = "0", status = "onhold" }) => {
  const statusLabel = () => {
    if (status === "onRoad") return "On Road";
    else if (status === "onHold") return "On Hold";
    else return "Completed";
  };
  return (
    <Card className={`status-card ${status.toLowerCase()}`} bordered={false}>
      {`${itemsLength} ${statusLabel(status)}`}
    </Card>
  );
};

export default BigStatusCard;
