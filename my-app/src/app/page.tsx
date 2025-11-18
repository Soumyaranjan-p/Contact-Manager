import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   
       <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-5 gap-5 sm:p-20 font-serif">
      <div className="text-center">
        <h1 className="text-4xl font-bold"> Welcome  To Contact Manager</h1>
          <p className="mt-2 text-lg text-gray-600">
            Manage Your Contacts easily and Efficiently
          </p>
          </div>
          <Image src="/contact.png"  alt="" width={300} height={300} className="rounded-lg  shadow-lg" />
      

<div className="text-center">
       
          <p className="mt-2 text-lg text-gray-600">
            Manage Your Contacts easily and Efficiently
          </p>
        </div>



       </div>
  );
}
