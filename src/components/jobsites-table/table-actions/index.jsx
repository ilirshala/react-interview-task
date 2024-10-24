import React from "react";
import { Flex, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import ActionButton from "../../action-button";

const TableActions = ({
  title,
  searchValue,
  onChangeSearch,
  onClickAddButton,
  placeholder,
}) => {
  return (
    <Flex style={{ marginBottom: "20px" }} justify="space-between">
      <Flex gap={"small"} align="center">
        <h4>{title}</h4>
      </Flex>
      <Flex gap={"small"} align="center">
        <Input
          size="medium"
          variant="filled"
          placeholder={placeholder}
          style={{ width: "450px" }}
          prefix={<SearchOutlined />}
          value={searchValue}
          onChange={onChangeSearch}
        />
        <ActionButton
          primaryIcon={<PlusOutlined className="check-icon" />}
          primaryText={"Create"}
          onClickPrimary={onClickAddButton}
        />
      </Flex>
    </Flex>
  );
};

export default TableActions;
