import React, { useState } from "react";
import DropdownInput from "../dropdown-input";
import DropdownList from "../dropdown-list";

const StatusDropdown = ({ status, setStatus }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownItems = [
    {
      label: "Completed",
      key: "completed",
    },
    {
      label: "In progress",
      key: "in_progress",
    },
    { label: "On Hold", key: "on_hold" },
  ];

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
        placeholder={status?.label || "Select one"}
        isStatusDropdown={true}
      />
      <DropdownList
        items={dropdownItems}
        openDropdown={openDropdown}
        onClickStatus={handleSelectStatus}
        isInStatus={true}
      />
    </div>
  );
};

export default StatusDropdown;
