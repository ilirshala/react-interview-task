import { EditTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleCategoryModal } from "../../store/actions/modals.action";

const EditButton = ({ category }) => {
  const dispatch = useDispatch();
  const handleEditButton = () => {
    dispatch(
      toggleCategoryModal({ categoryToUpdate: category, isEditCategory: true })
    );
  };
  return (
    <Button style={{ backgroundColor: "blue" }} onClick={handleEditButton}>
      <EditTwoTone twoToneColor={"#fff"} />
    </Button>
  );
};

export default EditButton;
