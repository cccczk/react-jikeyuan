import { Card } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import "./index.scss";
import logo from "@/assets/logo.png"
const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const logoUrl = "../"
  return (
    <div className="login">
      <div className="loginContainer">
        <Card
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            validateTrigger="onBlur"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入手机号!",
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "手机号码格式不对",
                },
                
              ]}
            >
              <Input size="large" placeholder="请输入手机号"></Input>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码!",
                },
              ]}
            >
              <Input size="large" placeholder="请输入密码"></Input>
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" size="large" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
