import React from "react";
import "./style.css";
import { Flex, Input } from "antd";
import {
  InfoCircleTwoTone,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import ActionButton from "../../action-button";

const TableActions = () => {
  return (
    <Flex className="tableActions" justify="space-between">
      <Flex gap={"small"} align="center">
        <InfoCircleTwoTone twoToneColor={"#1890FF"} />
        <p>Informative piece of text that can be used regarding this modal.</p>
      </Flex>
      <Flex gap={"small"} align="center">
        <Input
          size="medium"
          variant="filled"
          placeholder="large size"
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
