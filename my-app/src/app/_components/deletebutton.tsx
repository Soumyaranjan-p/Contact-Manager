"use client"
import { ContactType } from '../_types/contact'
import { FiTrash2 } from 'react-icons/fi';

type Deletebuttonprops= {
    contact?:ContactType;
}

const Deletebutton = ({contact}:Deletebuttonprops) => {
  return (
            

        <form action="" className='' method='post'>
            <button className='flex items-center gap-2 px-3 py-1 border border-red-300 rounded-md hover:bg-red-100 hover:border-red-400 text-red-700 cursor-pointer'
            
         onClick={(e)=>
            {
            if(!confirm("Are You Sure You Want to Delete This Contact") ){
                 e.preventDefault();
            }
         }
        }

            >
                  <FiTrash2 className='text-red-500 text-lg' />
                  Delete
            </button>
         </form>
  )
}

export default Deletebutton
