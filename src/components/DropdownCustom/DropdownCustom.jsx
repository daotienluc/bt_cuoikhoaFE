import React from "react";
import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { pathDefalut } from "../../common/path";

const items = [
  {
    key: "1",
    label: <Link to={pathDefalut.signIn}>Đăng nhập</Link>,
  },
  {
    key: "2",
    label: <Link to={pathDefalut.signUp}>Đăng ký</Link>,
  },
];

const DropdownCustom = () => {
  return (
    <>
      <Dropdown
        trigger={["click"]}
        menu={{
          items,
        }}
      >
        <button className="px-5 py-2 rounded-full border-2 duration-300 hover:shadow-xl">
          <UnorderedListOutlined />
          <UserOutlined className="text-2xl ml-2" />
        </button>
      </Dropdown>
    </>
  );
};

export default DropdownCustom;
