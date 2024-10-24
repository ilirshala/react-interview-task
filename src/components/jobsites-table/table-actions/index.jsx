import React from "react";
import "./style.css";
import { Flex, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import ActionButton from "../../action-button";

const TableActions = ({
  title,
  searchValue,
  onChangeSearch,
  onClickAddButton,
}) => {
  return (
    <Flex className="tableActions" justify="space-between">
      <Flex gap={"small"} align="center">
        <h4>{title}</h4>
      </Flex>
      <Flex gap={"small"} align="center">
        <Input
          size="medium"
          variant="filled"
          placeholder="Search a driver"
          className="searchInput"
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
