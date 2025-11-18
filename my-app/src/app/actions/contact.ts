"use server"

import { revalidatePath } from "next/cache";
import { deleteContacts } from "../api/contact";

export const deleteContactAction = async(prevState:any, formData: FormData) => {


    const id =formData.get("id") as string;
    try{
         await deleteContacts(id);
         revalidatePath("/contact");
         return { success:true  };

    }
    catch(error){
              console.log("Error deleting contact:", error);
              return{ success:false, error: "Failed to delete contact."};
    }

}