// withLogin.tsx
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Interface cho props được truyền vào WrappedComponent
interface WrappedComponentProps {
  handleLogin: (username: string, password: string) => Promise<void>;
  error: string;
}

// Higher-Order Component cho Đăng Nhập
const withLogin = (WrappedComponent: React.FC<WrappedComponentProps>) => {
  return function EnhancedComponent(
    props: Omit<WrappedComponentProps, "handleLogin" | "error">
  ) {
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleLogin = async (username: string, password: string) => {
      try {
        const response = await axios.post(
          "https://api-pro.teklearner.com/auth/v1/login",
          { username, password }
        );
        const { token } = response.data;
        localStorage.setItem("token", token);
        alert("Đăng nhập thành công!");
        router.push("/");
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          const errorMessage =
            err.response?.data?.error ||
            err.response?.data?.message ||
            "Không có thông tin chi tiết từ server.";
          setError(`Lỗi khi đăng nhập: ${errorMessage}`);
        } else {
          setError("Lỗi không xác định khi đăng nhập.");
        }
      }
    };

    return (
      <WrappedComponent
        {...(props as WrappedComponentProps)}
        handleLogin={handleLogin}
        error={error}
      />
    );
  };
};

export default withLogin;
