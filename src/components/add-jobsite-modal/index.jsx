import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddJobsiteModal } from "../../store/actions/modals.action";
import ActionButton from "../action-button";
import { CheckOutlined } from "@ant-design/icons";
import InputField from "../input-field";
import Dropdown from "../categories-dropdown";

const AddJobsiteModal = () => {
  const dispatch = useDispatch();
  const { isAddJobsiteModalOpen } = useSelector((state) => state.modals);

  const handleCloseModal = () => {
    dispatch(toggleAddJobsiteModal());
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
          />
        </div>,
      ]}
    >
      <InputField placeholder={"Type the jobsite’s name"} label={"Name"} />
      <Dropdown />
    </Modal>
  );
};

export default AddJobsiteModal;