/*
 * @Description  : 首页
 * @Author       : huyanyan
 * @Date         : 2021-07-13 16:07:19
 */

import React, { useEffect } from "react";
import { Table, Tag, Space, Menu } from "antd";

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const getMenu = (event: any) => {
  return (
    <Menu>
      <Menu.Item key="1">新建</Menu.Item>
      <Menu.Item key="2">修改</Menu.Item>
      <Menu.Item key="3">删除</Menu.Item>
    </Menu>
  );
};

/**
 * 右键
 */
const openMenus = (event: any) => {
  event.preventDefault();
  getMenu(event);
  console.log(event);
};
export default () => {
  return (
    <div>
      <Table
        dataSource={data}
        onRow={(record) => {
          return {
            onContextMenu: (event) => {
              openMenus(event);
            },
          };
        }}
      >
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};
