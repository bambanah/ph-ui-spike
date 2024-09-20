"use client";

import { ConfigProvider, theme } from "antd";
import React from "react";

const AntDesignLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <section>{children}</section>
    </ConfigProvider>
  );
};

export default AntDesignLayout;
