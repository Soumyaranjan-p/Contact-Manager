
"use client"

import { loginAction } from "../actions/auth"

const LoginForm = () => {
  return (
    
       <form    action={loginAction} className="text-black
       font-bold" suppressHydrationWarning>
          <div>
            <label className="block text-sm font-medium text-gray-800">  Email  
            </label>
            <input type="email"
            name="email"
            placeholder="Enter Your Name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2">

            </input>
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-800">  Password
            </label>
            <input type="password"
            name="password"
            placeholder="Enter Your Password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2">

            </input>
          </div>

          <button type="submit" 
          className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent ">
            Login
          </button>

       </form>


  )
}

export default LoginForm
