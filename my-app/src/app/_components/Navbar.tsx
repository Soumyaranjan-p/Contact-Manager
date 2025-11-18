
import Link from "next/link"
import Logout from "./LogOUTButton";
import { GetSession } from "@/app/_lib/session";
const Navbar = async () => {
        // const session = true;
          const session = await GetSession();

        
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
             < form action={"/logout"}>
  <button className="cursor-pointer  mr-8 font-bold text-red-700" type="submit">Logout</button>
</form>



        </>

) : (
            <>
              <Link className="text-blue-600 mr-5 font-bold" href="/login " >
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
