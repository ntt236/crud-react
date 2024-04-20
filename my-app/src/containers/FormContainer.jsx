import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import FormField from "../components/FormField";

const FormContainer = ({ onSubmidData }) => {
  const [emailValue, setEmailValue] = useState("");
  const onEmailValueChange = (e) => {
    setEmailValue(e.target.value);
  };
  const [passwordValue, setPasswordValue] = useState("");
  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const [addressValue, setAddressValue] = useState("");
  const onAddressChange = (e) => {
    setAddressValue(e.target.value);
  };

  const [phoneValue, setPhoneValue] = useState("");
  const onPhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isNaN(phoneValue)) {
      alert("Nhập lại số chính xác");
      return;
    }

    const emailLocal = JSON.parse(localStorage.getItem("email")) || [];
    const isEmailDuplicate = emailLocal.some(
      (storedEmail) => storedEmail === emailValue
    );

    if (isEmailDuplicate) {
      alert("Email đã tồn tại");
      return;
    } else {
      emailLocal.push(emailValue);
      localStorage.setItem("email", JSON.stringify(emailLocal));
      alert("Đã thêm thành công");
      setEmailValue("");
      setPasswordValue("");
      setAddressValue("");
      setPhoneValue("");
    }

    const object = {
      id: Math.random(),
      email: emailValue,
      password: passwordValue,
      address: addressValue,
      phone: phoneValue,
    };
    onSubmidData(object);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col md={6}>
          <FormField
            name="email"
            Label="Email"
            type="email"
            placeholder="Email placeholder"
            value={emailValue}
            onChange={onEmailValueChange}
          />
        </Col>
        <Col md={6}>
          <FormField
            name="password"
            Label="Password"
            placeholder="password placeholder"
            type="password"
            onChange={onPasswordChange}
            value={passwordValue}
          />
        </Col>
      </Row>
      <FormField
        name="address"
        Label="Address"
        placeholder="1234 Main St"
        onChange={onAddressChange}
        value={addressValue}
      />
      <FormField
        name="phone"
        Label="phone"
        placeholder="nhap phone"
        onChange={onPhoneChange}
        value={phoneValue}
      />
      <Button>Sign In</Button>
    </Form>
  );
};

export default FormContainer;
