import {Link} from 'react-router-dom';
import {BsPersonCircle,BsChatText, } from 'react-icons/bs';
import {AiOutlineNotification} from 'react-icons/ai';
import { ProfilePic } from '../post';

export const NavBar = () => {
  return (
  <div className='flex shadow-md bg-gradient-to-r from-blue-600 to-blue-400 justify-between  object-contain items-center  mb-6'>
    <div className='sm:w-' >
    <img 
    className=' w-[5vw] object-cover '
    src='logo.svg' 
    alt='logo.svg'/>
    </div>

    <div className='hidden  sm:block w-max-sm drop-shadow-md mix-blend-lighten ml-10'>
      <input 
        type='text' 
        placehoder="Search for friends,post or video"
        className='w-[30vw]  sm:w-[50vw] block border border-red-black px-2 py-1 rounded-full text-black text-md  ' />
    </div>

    <div className='flex  items-center justify-betweeen  object-contain ' >
      <div className='hidden capitalize items-start justify-between text-slate-600 text-sm mix-blend-darken '>
        <Link className='inline-block px-1'>homepage</Link>
        <Link className='inline-block '>timeline</Link>
      </div>
      <div className='flex items-center justify-between text-slate-800 text-xl mx-auto'>
        <BsPersonCircle  />
        <BsChatText />
        <AiOutlineNotification  />
      </div>
      <div >
        <ProfilePic/>
      </div>
    </div>
  </div>
  )
}

export default NavBar
