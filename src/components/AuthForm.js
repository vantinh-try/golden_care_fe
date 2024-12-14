import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import '../styles/AuthForm.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Thêm useNavigate để điều hướng

const AuthForm = ({ onLogin }) => {  // Nhận hàm onLogin từ props
  const [action, setAction] = useState("");
  const [loginError, setLoginError] = useState(""); // State để lưu thông báo lỗi đăng nhập
  const [registerError, setRegisterError] = useState(""); // State để lưu thông báo lỗi đăng ký
  const [termsAccepted, setTermsAccepted] = useState(false); // Kiểm tra người dùng có tick vào checkbox
  const navigate = useNavigate();  // Sử dụng useNavigate để điều hướng

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  // Hàm xử lý đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    try {
      console.log("Attempting to login...");
      const response = await axios.post('http://127.0.0.1:5000/auth/login', {
        username,
        password,
      });
      console.log("Login successful:", response.data);
      alert("Login successful!");
      setLoginError("");
      onLogin();
      navigate("/dashboard");
    } catch (error) {
      setLoginError("Invalid username or password");
    }
  };

  // Hàm xử lý đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const role = e.target.role.value;

    // Kiểm tra xem người dùng đã tick vào ô đồng ý điều khoản hay chưa
    if (!termsAccepted) {
      setRegisterError("You must agree to the terms and conditions");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/register', {
        username,
        password,
        role,
      });
      console.log("Register successful:", response.data);
      alert("Register successful!");
      setRegisterError("");  // Reset lỗi khi đăng ký thành công

      // Gọi hàm onLogin sau khi đăng ký thành công
      onLogin();

      // Điều hướng tới trang Dashboard sau khi đăng ký thành công
      navigate("/dashboard");
    } catch (error) {
      console.error("Error registering:", error);
      setRegisterError("Error registering. Please try again.");  // Hiển thị lỗi đăng ký
    }
  };

  return (
    <div className={`wrapper${action}`}>
      {/* Form đăng nhập */}
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>} {/* Hiển thị lỗi đăng nhập */}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me?
            </label>
            <a href="#"> Forgot password? </a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Form đăng ký */}
      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <select name="role" className="role-select" required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />{" "}
              I agree to the terms & conditions
            </label>
          </div>
          {registerError && <p style={{ color: 'red' }}>{registerError}</p>} {/* Hiển thị lỗi đăng ký */}
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;