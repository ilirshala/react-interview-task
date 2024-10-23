import React, { useState } from "react";
import DropdownInput from "../dropdown-input";
import "./style.css";
import DropdownList from "./dropdown-list";

const StatusDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [status, setStatus] = useState("");
  const dropdownItems = ["Completed", "In progress", "On Hold"];

  const handleSelectStatus = (status) => {
    setStatus(status);
    setOpenDropdown(false);
  };

  return (
    <div>
      <h5>Status</h5>
      <DropdownInput
        openDropdown={openDropdown}
        toggleDropdown={() => setOpenDropdown(!openDropdown)}
        placeholder={status || "Select one"}
        isStatusDropdown={true}
      />
      <DropdownList
        items={dropdownItems}
        openDropdown={openDropdown}
        onClickStatus={handleSelectStatus}
      />
    </div>
  );
};

export default StatusDropdown;
