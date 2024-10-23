import React from "react";
import "./style.css";
import { Flex, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import ActionButton from "../../action-button";

const TableActions = () => {
  return (
    <Flex className="tableActions" justify="space-between">
      <Flex gap={"small"} align="center">
        <h4>Jobsites</h4>
      </Flex>
      <Flex gap={"small"} align="center">
        <Input
          size="medium"
          variant="filled"
          placeholder="Search a driver"
          className="searchInput"
          prefix={<SearchOutlined />}
        />
        <ActionButton
          primaryIcon={<PlusOutlined className="check-icon" />}
          primaryText={"Create"}
        />
      </Flex>
    </Flex>
  );
};

export default TableActions;
