// ForgotPassword.js
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      setOtpVerified(true);
    } else {
      alert("OTP không chính xác. Vui lòng nhập lại!");
    }
  };

  const handleSubmitResetPassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      navigation("/login");
      alert("Đặt lại mật khẩu thành công!");
    } else {
      alert("Không khớp");
    }
  };

  return (
    <div className="register-container">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Quên mật khẩu</h3>
                {!otpSent ? (
                  <form>
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                    <div className="text-center">
                      <Button
                        type="button"
                        text="Tiếp tục"
                        onClick={handleSendOtp}
                        customBtn=" mt-3"
                      />
                    </div>
                  </form>
                ) : !otpVerified ? (
                  <form onSubmit={handleSubmitOtp}>
                    <InputField
                      label="OTP"
                      type="text"
                      name="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                    <div className="text-center">
                      <Button
                        type="submit"
                        text="Xác nhận OTP"
                        customBtn=" mt-3"
                      />
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmitResetPassword}>
                    <InputField
                      label="New Password"
                      type="password"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <InputField
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <div className="text-center">
                      <Button
                        type="submit"
                        text="Đặt lại mật khẩu"
                        customBtn=" mt-3"
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
