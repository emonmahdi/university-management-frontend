import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelectField from "../Forms/FormSelectField";
import { bloodGroupOptions } from "@/constant/global";
import FormTextArea from "../Forms/FormTextArea";

const StudentBasicInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "20px",
        marginTop: "10px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="email"
            name="student.email"
            size="large"
            label="Email"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.contactNo"
            size="large"
            label="Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormDatePicker
            name="student.dateOfBirth"
            label="Date of birth"
            size="large"
          />
        </Col>
        {/* Blood group */}
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            size="large"
            name="student.bloodGroup"
            options={bloodGroupOptions}
            label="Blood group"
            placeholder="Select"
          />
        </Col>

        {/* Present Address */}
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormTextArea
            name="admin.presentAddress"
            label="Present address"
            rows={4}
          />
        </Col>
        {/* Permanent Address */}
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormTextArea
            name="admin.permanentAddress"
            label="Permanent Address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentBasicInfo;
