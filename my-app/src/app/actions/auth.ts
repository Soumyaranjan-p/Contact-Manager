"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";

import { deleteCookie, setSession } from "../_lib/session";



const API_URL='http://localhost:3001';

 // export const loginAction = async(formData: FormData) =>{
// //    console.log("formData", formData);
// //     try {
// //           const response =await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
        
// //         );

       
// //         const user: UserType= response.data[0];
// //   if(!user) throw new Error ("Invalid Credentials");
// //     redirect('/contact');

// //    await setSession({name:user.name,email:user.email,id:user.id});


// //     } catch (error) {
// //         throw new Error("failed to Login ")
        
// //     }
//  }

export const loginAction = async (formData: FormData) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
    );

    const user: UserType = response.data[0];
    if (!user) throw new Error("Invalid Credentials");

    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
    });

    redirect("/contact");

  } catch (err: any) {

    // ← FIX HERE
    if (err.message === "NEXT_REDIRECT" || err.digest?.startsWith("NEXT_REDIRECT")) {
      throw err; // allow redirect to happen
    }

    console.error("🔥 REAL LOGIN ERROR:", err);
    throw new Error("failed to Login");
  }
};



export const logoutAction= async()=>{

  deleteCookie();
redirect('/login');


}