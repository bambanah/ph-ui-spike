"use client";

import Navbar from "@/components/antd/navbar";
import WorkbenchPage from "@/components/antd/workbench-page";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout, theme } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";

const AntDesignPage = () => {
  const [algorithm, setAlgorithm] = useState<
    "darkAlgorithm" | "defaultAlgorithm"
  >("defaultAlgorithm");

  useEffect(() => {
    const theme = localStorage.getItem("ant-theme");
    console.log(theme);

    if (theme === "darkAlgorithm" || theme === "defaultAlgorithm") {
      setAlgorithm(theme);
    }
  }, []);

  return (
    <ConfigProvider theme={{ algorithm: theme[algorithm] }}>
      <AntdRegistry>
        <Head>
          <title>Ant Design</title>
        </Head>

        <Layout style={{ height: "100vh", overflow: "hidden" }}>
          <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} />
          <WorkbenchPage />
        </Layout>
      </AntdRegistry>
    </ConfigProvider>
  );
};

export default AntDesignPage;
