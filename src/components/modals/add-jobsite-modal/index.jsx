import { Flex, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddJobsiteModal } from "../../../store/actions/modals.action";
import ActionButton from "../../action-button";
import { CheckOutlined } from "@ant-design/icons";
import InputField from "../../input-field";
import Dropdown from "../../categories-dropdown";
import StatusDropdown from "../../status-dropdown";
import { addJobsite } from "../../../store/actions/jobsites.action";

const AddJobsiteModal = () => {
  const dispatch = useDispatch();
  const { isAddJobsiteModalOpen } = useSelector((state) => state.modals);
  const [jobsiteName, setJobsiteName] = useState("");
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("");

  const handleSubmitNewJobsite = () => {
    const payload = {
      jobsitename: jobsiteName,
      categories: categories,
      status: status?.key,
    };
    dispatch(addJobsite(payload));
    dispatch(toggleAddJobsiteModal());
    setCategories([]);
    setStatus("");
    setJobsiteName("");
  };

  const handleCloseModal = () => {
    dispatch(toggleAddJobsiteModal());
    setCategories([]);
    setStatus("");
    setJobsiteName("");
  };
  return (
    <Modal
      open={isAddJobsiteModalOpen}
      title="Add Jobsite"
      onCancel={handleCloseModal}
      footer={[
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "70px",
          }}
        >
          <ActionButton type="cancel" onClickCancel={handleCloseModal} />
          <ActionButton
            type="primary"
            primaryText={"Save Changes"}
            primaryIcon={<CheckOutlined className="icon" />}
            onClickPrimary={handleSubmitNewJobsite}
          />
        </div>,
      ]}
    >
      <InputField
        placeholder={"Type the jobsite’s name"}
        label={"Name"}
        value={jobsiteName}
        onchange={(e) => setJobsiteName(e.target.value)}
      />
      <Flex gap={"middle"} style={{ marginTop: "10px" }}>
        <div style={{ flex: 0.75 }}>
          <Dropdown categories={categories} setCategories={setCategories} />
        </div>
        <div style={{ flex: 0.35 }}>
          <StatusDropdown status={status} setStatus={setStatus} />
        </div>
      </Flex>
    </Modal>
  );
};

export default AddJobsiteModal;
