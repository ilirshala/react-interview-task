import React from "react";
import { Flex, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import ActionButton from "../action-button";

const TableActions = ({
  searchValue,
  onChangeSearch,
  onClickAddButton,
  placeholder,
  style,
}) => {
  return (
    <Flex style={style} justify="flex-end">
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
