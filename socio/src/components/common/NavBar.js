import React from 'react'
import {AiOutlineMenu,AiOutlineFacebook} from "react-icons/ai";
import {BsHouse, BsCameraVideo } from "react-icons/bs"
import {Link} from 'react-router-dom'
 
const NavLink = [
  {id:1, name:'home', icons: <BsHouse/>},
  {id:2, name:'video', icons: <BsCameraVideo/>},
  {id:3, name:'feeds', icons: <AiOutlineFacebook/>},
]

export const NavBar = () => {
  return (
    <div className='flex w-full items-center m-3 p-2 flex-contain md:w-[40%] bg-black/60 shadow ml-[20%] border rounded-md h-[10vh]'>
        <AiOutlineMenu  className='fixed'/>
         <div className='ml-auto flex text-xl items-center '>
         {
          NavLink.map(({id,name,icons}) => {
            return (
              <span 
              key={id} 
              className='px-2'>
                <div className='flex items-center max-w-sm'>
                  <Link
                  className='flex items-center hover:ring  hover:ring-red-600  text-white outline-none rounded-md' 
                  to={`/${name}`}>{icons}
                    <span
                    className='m-1 hidden sm:block text-xl'
                    >
                    {name}
                    </span>
                  </Link>
                </div>
              </span>
            )
          })
        }
         </div>
      </div>
  )
}

export default NavBar
