// pages/login.tsx
"use client";

import { useRegister } from "../hooks/useRegister";

const Register: React.FC = () => {
  const {
    getValues,
    onRegisterHandler,
    setValue,
    token,
    watch,
    handleSubmit,
    errors,
    register,
    showPassword,
    setShowPassword,
  } = useRegister();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
        <form onSubmit={handleSubmit(onRegisterHandler)} className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className={`mt-1 block w-full p-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className={`mt-1 block w-full p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              username
            </label>
            <input
              type="text"
              className={`mt-1 block w-full p-2 border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              {...register("username", { required: "Email is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
