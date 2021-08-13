// import axios from 'axios'
// import { urlGetStudent } from './../contact';
import React from "react";
import { Form, Input, Button } from "antd";
import { TOKEN_AUTH, username, password } from "./../contact";
import { useState } from "react";
import { Alert } from "react-bootstrap";
const Login = () => {
  const [error, setError] = useState("");
  const onFinish = (values) => {
    //  axios.post(urlGetStudent+'/auth/signin',values).then(res=>{
    //     console.log(res)})
    try {
      setError("");
      if (values.username === username && values.password === password) {
        console.log(values);
        localStorage.setItem(TOKEN_AUTH, "thisTOKEN");
        window.location.href = "/dashboard";
      } else {
        setError("Failed to sign in");
      }
    } catch {
      setError("Failed to sign in");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Login" name="username" rules={[{ required: true, message: "Iltimos loginni kiriting!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Parol" name="password" rules={[{ required: true, message: "Iltimos parolni kiriting!" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="w-100" htmlType="submit">
            Yuborish
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
