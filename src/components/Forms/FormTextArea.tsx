"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <>
      <div className={`flex flex-col w-full`}>
        {label ? label : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Input.TextArea
              rows={rows}
              placeholder={placeholder}
              {...field}
              defaultValue={value}
            />
          )}
        />
      </div>
    </>
  );
};

export default FormTextArea;
