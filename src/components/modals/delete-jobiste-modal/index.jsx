import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../action-button";
import { DeleteFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { toggleDeleteJobsiteModal } from "../../../store/actions/modals.action";
import { deleteJobsite } from "../../../store/actions/jobsites.action";

const DeleteJobsiteModal = () => {
  const dispatch = useDispatch();
  const { isDeleteJobsiteModalOpen, jobsiteToDeleteId } = useSelector(
    (state) => state.modals
  );

  const handleCloseModal = () => {
    dispatch(toggleDeleteJobsiteModal());
  };
  const handleDeleteJobsiteModal = () => {
    dispatch(deleteJobsite(jobsiteToDeleteId));
    dispatch(toggleDeleteJobsiteModal());
  };
  return (
    <Modal
      open={isDeleteJobsiteModalOpen}
      title="Delete Jobsite"
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
          <ActionButton type="back" onClickPrimary={handleCloseModal} />
          <ActionButton
            type="cancel"
            onClickCancel={handleDeleteJobsiteModal}
            cancelIcon={<DeleteFilled className="icon" />}
            cancelText="Delete"
          />
        </div>,
      ]}
    >
      <h2>Are you sure you want to delete this jobsite?</h2>
    </Modal>
  );
};

export default DeleteJobsiteModal;
