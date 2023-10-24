import React from "react";

import AppIconSvg from "../../assets/images/appicon.svg";
import { Space, Typography } from "antd";

const { Title } = Typography;

function AppIcon() {
  return (
    <Space>
      <img className="logo" src={AppIconSvg} alt="Netflix & Chill" />
      <Title level={4} style={{ color: "#fff", marginBottom: "0px" }}>
        Netflix & Chill
      </Title>
    </Space>
  );
}

export default AppIcon;
