import { Card } from "antd";
import React from "react";
import "./style.css";

const StatusCard = ({
  itemsLength = "0",
  status = "onhold",
  cardSize = "big",
}) => {
  const statusLabel = () => {
    if (status === "in_progress") return "On Road";
    else if (status === "on_hold") return "On Hold";
    else return "Completed";
  };

  return (
    <>
      {cardSize === "big" ? (
        <Card
          className={`status-card ${status.toLowerCase()}`}
          bordered={false}
        >
          {`${itemsLength} ${statusLabel(status)}`}
        </Card>
      ) : (
        <Card
          className={`status-card small ${status.toLowerCase()}`}
          bordered={false}
        >
          {statusLabel(status)}
        </Card>
      )}
    </>
  );
};

export default StatusCard;
