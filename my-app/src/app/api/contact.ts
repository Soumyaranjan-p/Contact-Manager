import axios from "axios";
import { ContactType } from "../_types/contact";

const API_URL="http://localhost:3001";


export const getContacts= async(userId:string)=>{

 const  response =await axios.get(`${API_URL}/contacts?userId=${userId}`);
 return response.data;

}
export const getContactsbyId= async(id:string)=>{

 const  response =await axios.get(`${API_URL}/contacts/${id}`);
 return response.data;

}
export const CreateContacts= async(contact:ContactType)=>{

 const  response =await axios.post(`${API_URL}/contacts`,contact);
 return response.data;

}
export const UpdateContacts= async(id:string,contact:ContactType)=>{

 const  response =await axios.put(`${API_URL}/contacts${id}`,contact);
 return response.data;

}
export const deleteContacts= async(id:string)=>{

 const  response =await axios.delete(`${API_URL}/contacts${id}`);
 return response.data;

}
