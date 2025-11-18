//SERVER COMPONENT BYDEFAULT

import LoginForm from "@/app/_components/LoginForm"
import Link from "next/link"


const Login = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md ">
      <h1 className="text-2xl font-bold mb-6 text-black">Login</h1>

      <LoginForm />
      <p className="text-zinc-900 font-semibold mt-2">
        Dont Have An Account? 
          <Link className="text-blue-600 hover:underline" href='/register' >
             Register
        </Link>
      </p>
      
    </div>
  )
}

export default Login
