"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Interface cho props được truyền vào WrappedComponent
interface WrappedComponentProps {
  handleRegistration: (formData: RegistrationFormData) => Promise<void>;
  otpSent: boolean;
  error: string;
  handleOtpSubmit: (otp: string) => Promise<void>; // Cập nhật handleOtpSubmit
  otp: string; // Thêm otp
  setOtp: React.Dispatch<React.SetStateAction<string>>; // Thêm setOtp
}

// Interface cho dữ liệu form đăng ký
interface RegistrationFormData {
  email: string;
  phone: string;
  [key: string]: string;
}

const withRegistration = (
  WrappedComponent: React.FC<WrappedComponentProps>
) => {
  return function EnhancedComponent(
    props: Omit<
      WrappedComponentProps,
      | "handleRegistration"
      | "otpSent"
      | "error"
      | "handleOtpSubmit"
      | "otp"
      | "setOtp"
    >
  ) {
    const [error, setError] = useState<string>("");
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [formData, setFormData] = useState<RegistrationFormData | null>(null);
    const [otp, setOtp] = useState<string>("");
    const router = useRouter();

    const checkEmail = async (email: string): Promise<boolean> => {
      try {
        const response = await axios.post(
          "https://api-pro.teklearner.com/auth/v1/check-email",
          { email }
        );
        if (response.data.exists) {
          setError("Email đã tồn tại.");
          return false;
        }
        return true;
      } catch (err) {
        setError("Lỗi khi kiểm tra email.");
        return false;
      }
    };

    const checkPhone = async (phone: string): Promise<boolean> => {
      try {
        const response = await axios.post(
          "https://api-pro.teklearner.com/auth/v1/check-phone",
          { phone }
        );
        if (response.data.exists) {
          setError("Số điện thoại đã tồn tại.");
          return false;
        }
        return true;
      } catch (err) {
        setError("Lỗi khi kiểm tra số điện thoại.");
        return false;
      }
    };

    const sendOtp = async (email: string): Promise<void> => {
      try {
        const response = await axios.post(
          "https://api-pro.teklearner.com/auth/v1/send-otp-email",
          { email }
        );
        if (response.status === 200) {
          setOtpSent(true);
        } else {
          setError(
            `Lỗi không thể gửi mã OTP: ${
              response.data.message || "Không có thông tin chi tiết"
            }`
          );
        }
      } catch (err) {
        setError(`Lỗi khi gửi mã OTP: ${err}`);
      }
    };

    const handleRegistration = async (
      data: RegistrationFormData
    ): Promise<void> => {
      const { email, phone } = data;
      setFormData(data); // Lưu dữ liệu form vào state
      if ((await checkEmail(email)) && (await checkPhone(phone))) {
        await sendOtp(email);
        // Khi gửi mã OTP thành công, mã OTP sẽ được sử dụng để đăng ký
      }
    };

    const handleOtpSubmit = async (otp: string): Promise<void> => {
      if (formData) {
        const updatedFormData = { ...formData, otp };
        console.log("FormData before registration:", updatedFormData); // Kiểm tra dữ liệu gửi đi
        try {
          const response = await axios.post(
            "https://api-pro.teklearner.com/auth/v1/register",
            updatedFormData
          );

          // In toàn bộ phản hồi ra để kiểm tra
          console.log("API Response:", response.data);

          // Kiểm tra thuộc tính 'data' trong phản hồi
          const successMessage =
            "Chúc mừng! Bạn đã đăng ký tài khoản thành công";

          if (response.data?.data === successMessage) {
            alert("Đăng ký tài khoản thành công!");
            router.push("/"); // Chuyển hướng đến trang chủ sau khi đăng ký thành công
          } else {
            // Xử lý trường hợp không khớp với phản hồi thành công
            console.warn("Unexpected success response:", response.data);
            setError(
              `Đăng ký không thành công: ${
                response.data?.data || "Không có thông tin chi tiết"
              }`
            );
          }
        } catch (err: unknown) {
          if (axios.isAxiosError(err)) {
            console.error("API Error Response:", err.response?.data);

            // Hiển thị thông tin lỗi chi tiết hơn từ phản hồi lỗi của API
            const errorMessage =
              err.response?.data?.error ||
              err.response?.data?.message ||
              "Không có thông tin chi tiết từ server.";

            setError(`Lỗi khi đăng ký tài khoản: ${errorMessage}`);
          } else {
            console.error("Non-API Error:", err);
            setError("Lỗi không xác định khi đăng ký tài khoản.");
          }
        }
      } else {
        setError("Dữ liệu form không hợp lệ.");
      }
    };

    // Hàm xử lý lỗi để giảm code lặp
    const handleError = (err: unknown) => {
      if (axios.isAxiosError(err)) {
        console.error("API Error Response:", err.response?.data);
        setError(
          `Lỗi khi đăng ký tài khoản: ${
            err.response?.data?.error ?? "Không có thông tin chi tiết"
          }`
        );
      } else {
        console.error("Non-API Error:", err);
        setError("Lỗi khi đăng ký tài khoản.");
      }
    };

    return (
      <WrappedComponent
        {...props}
        handleRegistration={handleRegistration}
        otpSent={otpSent}
        error={error}
        otp={otp}
        setOtp={setOtp}
        handleOtpSubmit={handleOtpSubmit}
      />
    );
  };
};

export default withRegistration;
