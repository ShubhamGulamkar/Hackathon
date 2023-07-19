import React, { useState } from "react";

import "../css/signin-signup.css";

import axios from "axios";

import swal from "sweetalert";

import { useNavigate } from "react-router-dom";

const Register = (props) => {
  let emailpattern = ".*@genzeon.com";

  let mobilePattern = "[1789][0-9]{9}";

  let passwordPattern =
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

  var [newUser, setNewUser] = useState({
    EmployeeId: "",

    EmployeeName: "",

    Email: "",

    Password: "",

    ContactNo: "",
  });

  const handleChange = (event) => {
    console.log("in handle change");

    const { name, value } = event.target;

    setNewUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (newUser.EmployeeId.length !== 5) {
      swal("Please enter valid employee id");

      return;
    }

    if (!newUser.Email.match(emailpattern)) {
      swal("Please enter valid emailId");

      return;
    }

    if (!newUser.ContactNo.match(mobilePattern)) {
      swal("Please enter valid mobile number");

      return;
    }

    if (!newUser.Password.trim().match(passwordPattern)) {
      swal(
        "Password should contain minimum eight characters, at least one upper case letter, at least one lower case letter, one number and one special character"
      );

      return;
    }

    const obj = {
      EmployeeId: newUser.EmployeeId,

      EmployeeName: newUser.EmployeeName,

      Email: newUser.Email,

      Password: newUser.Password,

      ContactNo: newUser.ContactNo,
    };

    console.log(obj);

    let resp;

    try {
      resp = await axios.post("https://localhost:7136/api/User/signup", obj);

      console.log(resp.data);

      console.log(resp.status);

      swal("Account Has been created");

      navigate("/");
    } catch (error) {
      console.log(error);

      if (error.code === "ERR_BAD_RESPONSE") {
        swal("Emaild already registered");

        return;
      }

      console.log("maybe problem in Signin page data");
    }
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h1 style={{ padding: "5px" }}>Register</h1>

        <form className="register-form">
          <div className="input-row">
            <label className="label-text" htmlFor="name">
              Name
            </label>

            <input
              type="text"
              className="input-text"
              value={newUser.EmployeeName}
              name="EmployeeName"
              onChange={handleChange}
              id="EmployeeName"
              placeholder="Name"
              required
            />
          </div>

          <div className="input-row">
            <label className="label-text" htmlFor="Employee ID">
              Employee ID
            </label>

            <input
              type="number"
              className="input-text"
              value={newUser.EmployeeId}
              onChange={handleChange}
              placeholder="Empid"
              id="EmployeeId"
              name="EmployeeId"
              required
            />
          </div>

          <div className="input-row">
            <label className="label-text" htmlFor="email">
              Email
            </label>

            <input
              className="input-text"
              value={newUser.Email}
              type="email"
              placeholder="youremail@genzeon.com"
              id="Email"
              name="Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-row">
            <label className="label-text" htmlFor="Mobile">
              Mobile No
            </label>

            <input
              type="mobile"
              className="input-text"
              value={newUser.ContactNo}
              placeholder="Mobile No."
              id="ContactNo"
              name="ContactNo"
              onChange={handleChange}
              maxLength={10}
            />
          </div>

          <div className="input-row">
            <label className="label-text" htmlFor="password">
              Password
            </label>

            <input
              className="input-text"
              value={newUser.Password}
              onChange={handleChange}
              type="password"
              placeholder="********"
              id="Password"
              name="Password"
            />
          </div>

          <br />

          <button className="button1" type="submit" onClick={submitHandler}>
            Sign Up
          </button>
        </form>

        <br />

        <a href="/" className="link">
          Already have an account? Login here.
        </a>
      </div>
    </div>
  );
};

export default Register;
