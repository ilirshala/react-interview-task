import { Flex, Modal, message } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddJobsiteModal } from "../../../store/actions/modals.action";
import ActionButton from "../../action-button";
import { CheckOutlined } from "@ant-design/icons";
import InputField from "../../input-field";
import Dropdown from "../../categories-dropdown";
import StatusDropdown from "../../status-dropdown";
import { addJobsite } from "../../../store/actions/jobsites.action";
import { useJobsiteFormModal } from "../../../hooks/useJobsiteFormModal";
import { renderError } from "../../../utils/inputValidation";

const AddJobsiteModal = () => {
  const dispatch = useDispatch();
  const { isAddJobsiteModalOpen } = useSelector((state) => state.modals);
  const {
    jobsiteName,
    setJobsiteName,
    categories,
    setCategories,
    status,
    setStatus,
    errors,
    setErrors,
    validateInputs,
    resetForm,
  } = useJobsiteFormModal();

  const handleCloseModal = useCallback(() => {
    dispatch(toggleAddJobsiteModal());
    resetForm();
  }, [dispatch, resetForm]);

  const handleSubmitNewJobsite = useCallback(() => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      jobsitename: jobsiteName,
      categories: categories,
      status: status?.key,
    };

    dispatch(addJobsite(payload));
    message.success("Jobsite added successfully");
    handleCloseModal();
  }, [
    validateInputs,
    jobsiteName,
    categories,
    status?.key,
    dispatch,
    handleCloseModal,
    setErrors,
  ]);

  return (
    <Modal
      open={isAddJobsiteModalOpen}
      title="Add Jobsite"
      onCancel={handleCloseModal}
      footer={[
        <Flex
          justify="flex-end"
          gap={10}
          key="footer-buttons"
          style={{ marginTop: "60px" }}
        >
          <ActionButton type="cancel" onClickCancel={handleCloseModal} />
          <ActionButton
            type="primary"
            primaryText={"Save Changes"}
            primaryIcon={<CheckOutlined className="icon" />}
            onClickPrimary={handleSubmitNewJobsite}
          />
        </Flex>,
      ]}
    >
      <InputField
        placeholder={"Type the jobsite’s name"}
        label={"Name"}
        type="text"
        value={jobsiteName}
        onChange={(e) => setJobsiteName(e.target.value)}
        style={{ width: "100%" }}
        containerStyle={{ width: "100%" }}
        errors={errors.jobsiteName}
      />

      <Flex gap="middle" style={{ marginTop: "10px" }}>
        <div style={{ flex: 0.75 }}>
          <Dropdown categories={categories} setCategories={setCategories} />
          {renderError(errors.categories)}
        </div>

        <div style={{ flex: 0.35 }}>
          <StatusDropdown status={status} setStatus={setStatus} />
          {renderError(errors.status)}
        </div>
      </Flex>
    </Modal>
  );
};

export default AddJobsiteModal;
