import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [isEmail, setIsEmail] = useState();
  const [isPassword, setIsPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();

    const url = "https://belajar-c32f0.firebaseio.com/akun.json";
    try {
      const response = await axios.post(
        url,
        {
          emaiL: isEmail,
          password: isPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = response.data;

      console.log(resData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <form onSubmit={submitHandler}>
        {/* EMAIL */}
        <div className="form-group">
          <label for="inputEmail">Email</label>
          <input
            id="inputEmail"
            className="form-control"
            type="email"
            required
            onChange={(e) => setIsEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input
            className="form-control"
            type="password"
            id="inputPassword"
            required
            onChange={(e) => setIsPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Masuk
        </button>
        <div>{isEmail}</div>
        <div>{isPassword}</div>
      </form>
    </div>
  );
};

export default Login;
