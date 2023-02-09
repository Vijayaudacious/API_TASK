import { Button, Form, Input, Card } from "antd";
import styles from "./styles.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const { data } = await axios.post(`https://reqres.in/api/login`, values);
      await Cookies.set("token", data.token);
      if (
        data.token == "QpwL5tke4Pnpja7X4" &&
        values.email == "eve.holt@reqres.in" &&
        values.password == "cityslicka"
      ) {
        navigate("/");
        console.log("right id password");
      } else {
        alert("Enter Valid Password");
      }
    } catch (error) {
      alert("Enter Valid Email");
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <Card
        title={<h1 style={{ textAlign: "center", marginTop: 15 }}>LOGIN</h1>}
        bordered
        hoverable
        style={{ width: 500 }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
            marginTop: 10,
            marginRight: 40,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: 150,
                marginTop: 10,
                marginLeft: 40,
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
