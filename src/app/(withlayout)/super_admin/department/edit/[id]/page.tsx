"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params?: any;
};

const EditDepartmentPage = ({ params }: IDProps) => {
  // console.log(params);
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.......");
    try {
      // console.log(data);
      await updateDepartment({ id, body: values });
      message.success("department updated successfully");
    } catch (err: any) {
      console.log(err);
      message.error(err.message);
    }
  };

  const defaultValues: any = {
    title: data?.title || "",
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `department`,
            link: `/super_admin/department`,
          },
        ]}
      />
      <ActionBar title="Update Department" />

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8 }}>
          <Col>
            <FormInput type="text" name="title" label="Title" />
          </Col>
        </Row>
        <div style={{ marginBottom: "10px" }}></div>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
