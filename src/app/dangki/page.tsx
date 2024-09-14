"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import withRegistration from "../components/withRegistration";

type RegistrationFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  gender: string;
  birthday: string;
};
function Registration({
  handleRegistration,
  otpSent,
  error,
  handleOtpSubmit, // Thêm handleOtpSubmit
}: // Thêm setOtp
{
  handleRegistration: (formData: RegistrationFormData) => Promise<void>;
  otpSent: boolean;
  error: string;
  handleOtpSubmit: (otp: string) => Promise<void>; // Thay đổi kiểu
}) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    birthday: "",
  });
  const [otpInput, setOtpInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await handleRegistration(formData);
  };

  const handleOtpSubmitClick = async (e: FormEvent) => {
    e.preventDefault();
    await handleOtpSubmit(otpInput);
  };

  return (
    <>
      <div className="bg-body-tertiary">
        <div className="container d-flex flex-column align-items-center ">
          <h1 className="my-4">Registration Form</h1>
          <form
            className="form fw-bold p-4 border rounded shadow mb-5"
            style={{ maxWidth: "960px", width: "100%" }}
            onSubmit={handleFormSubmit}
          >
            <div className="d-flex flex-row mb-4">
              <button className="btn-h google me-2">
                <svg
                  version="1.1"
                  width="20"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <path
                    style={{ fill: "#FBBB00" }}
                    d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                  c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                  C103.821,274.792,107.225,292.797,113.47,309.408z"
                  ></path>
                  <path
                    style={{ fill: "#518EF8" }}
                    d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                  c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                  c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                  ></path>
                  <path
                    style={{ fill: "#28B446" }}
                    d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                  c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                  c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                  ></path>
                  <path
                    style={{ fill: "#F14336" }}
                    d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                  c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                  C318.115,0,375.068,22.126,419.404,58.936z"
                  ></path>
                </svg>
                Google
              </button>
              <button className="btn-h facebook me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                >
                  <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24h11.494V14.706h-3.13v-3.624h3.13V8.413c0-3.1 1.893-4.786 4.658-4.786 1.325 0 2.465.099 2.798.143v3.24l-1.92.001c-1.505 0-1.796.715-1.796 1.764v2.31h3.587l-.467 3.624h-3.12V24h6.117C23.406 24 24 23.406 24 22.675V1.325C24 .594 23.406 0 22.675 0z" />
                </svg>
                Facebook
              </button>
              <button className="btn-h instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#833ab4", stopOpacity: 1 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#fd1d1d", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#fcb045", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#instagramGradient)"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.253 2.242 1.314 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.253-3.608 1.314-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.253-2.242-1.314-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.242-1.253 3.608-1.314 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.257 0-3.667.013-4.947.072-1.564.068-3.003.368-4.14 1.506C2.37 3.817 2.07 5.257 2.002 6.82c-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.068 1.564.368 3.003 1.506 4.14 1.137 1.137 2.576 1.438 4.14 1.506 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.564-.068 3.003-.368 4.14-1.506 1.137-1.137 1.438-2.576 1.506-4.14.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.068-1.564-.368-3.003-1.506-4.14C20.003 2.37 18.564 2.07 17 2.002 15.72 1.943 15.31 1.93 12 1.93zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 
0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
                  />
                </svg>
                Instagram
              </button>
            </div>
            <p className="p line">Or With</p>
            <div className="text-center mb-4">
              <p className="my-2">Profile Picture</p>
              <div className="upload-icon">
                <input type="file" id="fileInput" className="file-input" />
                <label htmlFor="fileInput" className="upload-button">
                  <span className="plus">+</span>
                </label>
              </div>
            </div>
            <div>
              <p>Personal Detail</p>
              <div className="container fw-medium">
                <div className="row mb-3">
                  <div className="col-6 mb-2">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      // onChange={handleInputChange}
                      // value={formData.firstName}
                      className="form-control"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="name">Last Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleInputChange}
                      value={formData.name}
                      className="form-control"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleInputChange}
                      value={formData.email}
                      className="form-control"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="mobile">Mobile Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={handleInputChange}
                      value={formData.phone}
                      className="form-control"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="mobile">Password *</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleInputChange}
                      value={formData.password}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <p>Address</p>
              <div className="container fw-medium">
                <div className="row mb-3">
                  <div className="col-6 mb-2">
                    <label htmlFor="street">Street</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      onChange={handleInputChange}
                      value={formData.address}
                      className="form-control"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="area">Area</label>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      onChange={handleInputChange}
                      value={formData.gender}
                      className="form-control"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="emirate">Emirate</label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      onChange={handleInputChange}
                      value={formData.birthday}
                      className="form-control"
                    />
                  </div>
                  {otpSent && (
                    <div className="col-6 mt-4">
                      <div className="row">
                        <div className=" col-auto ">
                          <input
                            className="form-control"
                            type="text"
                            value={otpInput}
                            onChange={(e) => setOtpInput(e.target.value)}
                            placeholder="Enter OTP"
                            required
                          />
                        </div>
                        <div className="col-auto">
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleOtpSubmitClick}
                          >
                            Submit OTP
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-register">
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default withRegistration(Registration);
