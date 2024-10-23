import React from "react";
import { Button, Space } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toggleDeleteJobsiteModal } from "../../../store/actions/modals.action";

const JobSiteRowActions = ({ record, jobsiteId }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(toggleDeleteJobsiteModal(jobsiteId));
  };

  return (
    <Space size="middle">
      <Button
        style={{ backgroundColor: "#FF4D4F" }}
        onClick={handleDeleteClick} // Attach click handler
      >
        <DeleteTwoTone twoToneColor={"#fff"} />
      </Button>
    </Space>
  );
};

export default JobSiteRowActions;
