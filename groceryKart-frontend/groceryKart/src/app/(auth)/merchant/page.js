"use client";

import Logo from "@/components/Logo";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUp } from "@/api/auth";

const MerchantRegisterPage = () => {
  const { register, handleSubmit } = useForm();

  async function submitForm(data) {
    try {
      // Adding the merchant role to the form data
      const payload = {
        ...data,
        roles: ["MERCHANT"],
      };

      const result = await signUp(payload);
      
      // Saving token to local storage
      localStorage.setItem("authToken", result.token);
      
      console.log("Registration Successful:", result);
      alert("Merchant Account Created Successfully!");
      
      // Optional: Redirect to login
      // window.location.href = LOGIN_ROUTE;
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Error creating account. Please use a unique email and strong password.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Merchant Registration
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Grow your business with <span className="font-semibold text-green-600">GroceryKart</span>
          </p>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit(submitForm)}>
          
          <div className="space-y-4 rounded-md">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Business Owner Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
                required
                {...register("name")}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Business Email</label>
              <input
                type="email"
                placeholder="merchant@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
                required
                {...register("email")}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="98XXXXXXXX"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
                required
                {...register("phone")}
              />
            </div>

            {/* Address Grid */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Store Location</label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <input
                  type="text"
                  placeholder="City"
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
                  required
                  {...register("city")}
                />
                <input
                  type="text"
                  placeholder="Province"
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
                  required
                  {...register("province")}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Include Uppercase, Number & Symbol"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
                required
                {...register("password")}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-green-600 py-3 px-4 text-sm font-bold text-white shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 active:scale-95"
            >
              Sign Up as Merchant
            </button>
          </div>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href={LOGIN_ROUTE}
                className="font-medium text-green-600 hover:text-green-500 transition duration-200 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MerchantRegisterPage;