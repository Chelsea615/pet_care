"use client";

import { useState } from "react";

const phonePattern = /^1[3-9]\d{9}$/;

export default function BookingForm() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function validatePhone(value, showEmptyError = false) {
    let message = "";

    if (!value && showEmptyError) {
      message = "请输入手机号";
    } else if (value && !phonePattern.test(value)) {
      message = "请输入正确的 11 位手机号";
    }

    setPhoneError(message);
    return !message;
  }

  function handlePhoneChange(event) {
    const value = event.target.value.replace(/\D/g, "").slice(0, 11);
    setPhone(value);
    validatePhone(value, false);
  }

  function handleSubmit(event) {
    if (!validatePhone(phone, true)) {
      event.preventDefault();
      event.currentTarget.elements.phone.focus();
    }
  }

  return (
    <form id="bookingForm" noValidate onSubmit={handleSubmit}>
      <label>
        姓名
        <input type="text" placeholder="请输入您的称呼" />
      </label>
      <label>
        手机
        <input
          id="phoneInput"
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          maxLength="11"
          pattern="^1[3-9][0-9]{9}$"
          placeholder="请输入 11 位手机号"
          aria-describedby="phoneError"
          className={phoneError ? "is-invalid" : ""}
          value={phone}
          onChange={handlePhoneChange}
          onBlur={() => validatePhone(phone, true)}
          required
        />
        <span className="field-error" id="phoneError" aria-live="polite">
          {phoneError}
        </span>
      </label>
      <label>
        宠物类型
        <select>
          <option>狗狗</option>
          <option>猫咪</option>
          <option>其他小宠</option>
        </select>
      </label>
      <label>
        预约服务
        <select>
          <option>基础洁净洗护</option>
          <option>精致造型修剪</option>
          <option>皮毛深层护理</option>
          <option>到店评估后决定</option>
        </select>
      </label>
      <label className="full">
        备注
        <textarea placeholder="例如：体重、毛结情况、是否怕吹风、期望到店时间"></textarea>
      </label>
      <button className="button full" type="submit">
        提交预约
      </button>
    </form>
  );
}
