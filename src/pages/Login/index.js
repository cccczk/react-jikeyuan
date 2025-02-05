import { Card } from "antd";
import { Button, Checkbox, Form, Input,message } from "antd";
import "./index.scss";
import logo from "@/assets/logo.png"
import { useDispatch } from "react-redux";
import { fetchLogin } from "@/store/modules/user";
import { useNavigate } from "react-router-dom";
const Login =  () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log("Success:", values);
    await dispatch(fetchLogin(values));
    navigate("/");
    message.success("登陆成功");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
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
              name="mobile"
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
              name="code"
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
