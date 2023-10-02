"use client";
import { Image, Row } from "antd";
import errorImg from "../assets/error.png";

const NotFound = () => {
  return (
    <Row
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404!!! Page not found!.</h1>
      {/* <Image src={errorImg} width={500} alt="Login ai" /> */}
    </Row>
  );
};

export default NotFound;
