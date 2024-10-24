import { EditTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const EditButton = () => {
  const dispatch = useDispatch();
  const handleEditButton = () => {};
  return (
    <Button style={{ backgroundColor: "blue" }}>
      <EditTwoTone twoToneColor={"#fff"} />
    </Button>
  );
};

export default EditButton;
