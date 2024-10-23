import React from "react";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import "./style.css";

const ActionButton = ({
  type = "primary",
  primaryText,
  primaryIcon,
  onClickPrimary,
  onClickCancel,
  onClickBack,
}) => {
  const actionTypes = {
    primary: (
      <button className="action-button primary" onClick={onClickPrimary}>
        <span>{primaryText}</span>
        {primaryIcon}
      </button>
    ),
    cancel: (
      <button className="action-button cancel" onClick={onClickCancel}>
        <span>Cancel Changes</span>
        <CloseOutlined className="icon" />
      </button>
    ),
    back: (
      <button className="action-button back" onClick={onClickBack}>
        <span>Go Back</span>
        <ArrowLeftOutlined className="icon" />
      </button>
    ),
  };

  return actionTypes[type] || null;
};

export default ActionButton;
