import React, { useEffect, useState } from "react";
import { Button, Form, message, Typography } from "antd";
import BaseLayout from "@/Components/layouts/base.layout";
import Lotties from "@/Components/general/Lotties";
import Animation from "@/assets/lotties/mail.json";
import EmailVerificationCodeForm from "@/Components/data-entry/form/auth/email-verification-code.form";

const Page = () => {
  const [form] = Form.useForm();
  const [enabled, setEnabled] = useState<boolean>(false);
  const watchForm = Form.useWatch([], form);

  function _onFinish() {
    message
      .loading({
        key: "submit",
        content: "Loading...",
      })
      .then((r) => r);
    form
      .validateFields()
      .then((values) => {
        // action
      })
      .catch((err: any) => {
        message
          .error({
            key: "submit",
            content: err?.message,
          })
          .then((r) => r);
      });
  }

  useEffect(() => {
    if (watchForm && Object.keys(watchForm).length > 0) {
      let _allFilled = Object.entries(watchForm).every(
        ([_, value]: [string, any]) => typeof value !== "undefined"
      );
      setEnabled(_allFilled);
    }
  }, [watchForm]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white dark:bg-layout-dark">
      <div className="w-full max-w-[520px] p-6 rounded-xl mx-auto space-y-10">
        <div className="text-center">
          <div className="h-[180px] flex flex-col items-center justify-center">
            <Lotties width={320} animation={Animation} />
          </div>
          <Typography.Title level={1} className="!text-2xl">
            Email Verification Required
          </Typography.Title>
          <Typography.Paragraph>
            We've sent a verification link to your email address. Please check
            your inbox and click the link to verify your email and activate your
            account. If you don't see the email, check your spam or junk folder.
            You can request another verification email if needed.
          </Typography.Paragraph>
        </div>
        {/* <EmailVerificationCodeForm
          form={form}
          onFinish={_onFinish}
        >
          <div className="py-4">
            <Button
              disabled={!enabled}
              htmlType="submit"
              type="primary"
              className="w-full"
            >Submit</Button>
          </div>
        </EmailVerificationCodeForm> */}
      </div>
    </div>
  );
};

Page.layout = (children: React.ReactNode) => <BaseLayout children={children} />;

export default Page;
