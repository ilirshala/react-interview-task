import React from "react";
import "./style.css";
import { Flex, Input } from "antd";
import { InfoCircleTwoTone, SearchOutlined } from "@ant-design/icons";

const TableActions = () => {
  return (
    <Flex className="tableActions" justify="space-between">
      <Flex gap={"small"} align="center">
        <InfoCircleTwoTone twoToneColor={"#1890FF"} />
        <p>Informative piece of text that can be used regarding this modal.</p>
      </Flex>
      <Flex>
        <Input
          size="medium"
          variant="filled"
          placeholder="large size"
          prefix={<SearchOutlined />}
        />
      </Flex>
    </Flex>
  );
};

export default TableActions;
