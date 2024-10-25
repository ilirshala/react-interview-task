import React from "react";
import "./style.css";

const TableHeader = ({ title }) => {
  return (
    <div className="tableHeader">
      <h3>{title}</h3>
    </div>
  );
};

export default TableHeader;
