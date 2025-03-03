"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();

  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit = async () => {
    setLoading(true);
    setLoginError("");
    const data = getValues();

    const response = await signIn("credentials", {
      ...data,
      redirect: false
    }).finally(() => setLoading(false));

    if (response?.error) {
      setLoginError(response.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Login to your account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600 max-w'>
          Or {}
          <Link href='/register' className='font-medium text-blue-600 hover:text-blue-500'>
            Create a new account
          </Link>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <input
                type='email'
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your email'
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <input
                type='password'
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your password'
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>

            {/* Display Login Error */}
            {loginError && <p className='text-red-500'>{loginError}</p>}

            {/* Submit Button */}
            <div>
              <button
                disabled={loading}
                type='submit'
                className='w-full disabled:opacity-45 disabled:cursor-not-allowed py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center gap-2 justify-center'
              >
                {loading && <Loader className='animate-spin size-4' />}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
