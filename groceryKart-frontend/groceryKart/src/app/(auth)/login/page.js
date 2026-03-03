"use client";

import { useForm } from "react-hook-form";
import { REGISTER_ROUTE } from "@/constants/routes";
import Link from "next/link";
import Logo from "@/components/Logo";
import { login } from "@/api/auth";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  async function submitForm(data) {
    try {
    const result = await login(data);

    console.log(result);
    } catch (error) {
      console.log(error.response.data)
    }
  }


  return (
    <div className="flex mt-36 items-center justify-center w-full px-4">
      <div className="flex w-full flex-col max-w-96 gap-5">

       <Logo/>
        {/* Form Box */}
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-3xl font-medium text-gray-900">
            Sign in
          </h2>
          <p className="mt-3 text-gray-500">
            Please enter email and password to access.
          </p>

          <div className="mt-10">
            <label className="font-medium text-gray-700">
              Email
            </label>
            <input
              placeholder="Please enter your email"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
              type="email"
              {...register("email")}
            />
          </div>

          <div className="mt-6">
            <label className="font-medium text-gray-700">
              Password
            </label>
            <input
              placeholder="Please enter your password"
              className="mt-2 w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
              type="password"
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-md bg-green-600 py-3 text-white font-medium transition hover:bg-green-700"
          >
            Login
          </button>

          <p className="text-center py-6 text-sm">
            Don&apos;t have an account?
            <Link
              href={REGISTER_ROUTE}
              className="ml-2 text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
