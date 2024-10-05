// pages/login.tsx
"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { useRouter } from "next/router";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "../../../../types/Types";
import { useLogin } from "../hooks/useLogin";

const Login: React.FC = () => {
  const {
    getValues,
    onLoginHandler,
    setValue,
    token,
    watch,
    handleSubmit,
    errors,
    register,
    showPassword,
    setShowPassword,
  } = useLogin();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LoginForm>();
  // const router = useRouter();
  // const [errorMessage, setErrorMessage] = useState("");

  // const onSubmit = async (data: LoginForm) => {
  //   try {
  //     const response = await axios.post("/api/auth/login", data);
  //     if (response.status === 200) {
  //       // Redirect to the dashboard or homepage after successful login
  //       router.push("/dashboard");
  //     }
  //   } catch (error) {
  //     setErrorMessage("Invalid email or password");
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
        <form onSubmit={handleSubmit(onLoginHandler)} className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              useName
            </label>
            <input
              type="text"
              className={`mt-1 block w-full p-2 border ${
                errors.identifier ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              {...register("identifier", { required: "Email is required" })}
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm">
                {errors.identifier.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className={`mt-1 block w-full p-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                {...register("password", { required: "Password is required" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 left-0 flex items-center px-3 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
