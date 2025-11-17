import { NextResponse } from "next/server"


 export const GET  = () => {

  return NextResponse.json(
      {
        message:"Hello This is the API route",
        status:"success"
      }
  )
}


