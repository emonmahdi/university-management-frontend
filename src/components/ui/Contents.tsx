"use client";
import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
import Header from "./Header";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />

      <div
        style={{
          padding: "0 15px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
