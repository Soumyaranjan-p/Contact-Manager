

"use client";

import { useRouter } from "next/navigation"
import { logoutAction } from "../actions/auth";

const Logout = () => {
  const router=useRouter();
  const handleLogout = async() => {
    try {
      await logoutAction();
      router.push("/login");
      router.refresh();

    } catch (error) {
      
      console.error("Logout failed:", error);


    }


  }
  return (
    <form action={logoutAction}  method="post" suppressHydrationWarning>
                              
      <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer" onClick={handleLogout}>Logout</button>

    </form>
  )
}

export default Logout 
