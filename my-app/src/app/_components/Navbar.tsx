import Link from "next/link"
import Logout from "./LogOUTButton";

const Navbar = () => {
        const session = true;
  return (
             

    <nav className=" bg-white shadow-sm">
        <div className="container mx-auto p-4 flex justify-between items-center ">
            <Link className="text-xl font-bold text-blue-600" href="/">Contact Manager</Link>


       <div className="flex items-center  space-x-4" >
        {session ?(
             <>
              <Link className="text-blue-600 mr-8 font-bold" href="/contact" >
              Contacts
              </Link>
              <Logout />
        </>

) : (
            <>
              <Link className="text-blue-600 mr-5" href="/login" >
              Login
              </Link>
              <Link className="hover:text-blue-600 mr-5" href="/register" >
             Register
              </Link>
            </>
        )
    }
    </div>
       </div>



    </nav>
  )
}

export default Navbar
