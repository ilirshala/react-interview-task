import { Flex, Modal, message } from "antd";
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
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!jobsiteName.trim()) newErrors.jobsiteName = "Jobsite name is required";
    if (categories.length === 0)
      newErrors.categories = "At least one category is required";
    if (!status || !status.key) newErrors.status = "Status is required";
    return newErrors;
  };

  const handleSubmitNewJobsite = () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
      return;
    }

    const payload = {
      jobsitename: jobsiteName,
      categories: categories,
      status: status?.key,
    };

    dispatch(addJobsite(payload));
    message.success("Jobsite added successfully"); // Show success message
    dispatch(toggleAddJobsiteModal());
    resetForm();
  };

  const resetForm = () => {
    setCategories([]);
    setStatus("");
    setJobsiteName("");
    setErrors({});
  };

  const handleCloseModal = () => {
    dispatch(toggleAddJobsiteModal());
    resetForm();
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
        type="text"
        value={jobsiteName}
        onChange={(value) => setJobsiteName(value)}
        style={{ width: "100%" }}
        containerStyle={{ width: "100%" }}
        errors={errors.jobsiteName}
      />

      <Flex gap={"middle"} style={{ marginTop: "10px" }}>
        <div style={{ flex: 0.75 }}>
          <Dropdown categories={categories} setCategories={setCategories} />
          {errors.categories && (
            <p className="error-text">{errors.categories}</p>
          )}{" "}
        </div>

        <div style={{ flex: 0.35 }}>
          <StatusDropdown status={status} setStatus={setStatus} />
          {errors.status && <p className="error-text">{errors.status}</p>}{" "}
        </div>
      </Flex>
    </Modal>
  );
};

export default AddJobsiteModal;
