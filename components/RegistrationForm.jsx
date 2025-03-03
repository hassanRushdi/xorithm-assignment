"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset
  } = useForm();

  const router = useRouter();

  const onSubmit = async () => {
    const req = await axios.post("/api/auth/register", getValues(), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (req.status === 201) {
      reset();
      router.push("/login");
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Create a new account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600 max-w'>
          Or {}
          <Link href='/login' className='font-medium text-blue-600 hover:text-blue-500'>
            Sign-in to your account
          </Link>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <div className='mt-1'>
                <input
                  type='name'
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm /'
                  placeholder='Enter your name address'
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm /'
                  placeholder='Enter your email address'
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <input
                  type='password'
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Enter your password'
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                />
              </div>
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer'
              >
                Register
              </button>
            </div>
          </form>
          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-gray-100 text-gray-500'>Or continue with</span>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-3 gap-3'>
              <div>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                >
                  <img
                    className='h-5 w-5'
                    src='https://www.svgrepo.com/show/512120/facebook-176.svg'
                    alt=''
                  />
                </a>
              </div>
              <div>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                >
                  <img
                    className='h-5 w-5'
                    src='https://www.svgrepo.com/show/513008/twitter-154.svg'
                    alt=''
                  />
                </a>
              </div>
              <div>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                >
                  <img
                    className='h-6 w-6'
                    src='https://www.svgrepo.com/show/506498/google.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
