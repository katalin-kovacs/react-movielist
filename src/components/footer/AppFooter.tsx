import React from "react";
import AppIcon from "../appicon/AppIcon";

import { Layout } from "antd";

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer
      style={{
        backgroundColor: "#001529",
        textAlign: "center",
        marginTop: "48px",
      }}
    >
      <AppIcon />
    </Footer>
  );
}

export default AppFooter;
