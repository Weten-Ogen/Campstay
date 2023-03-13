import {Link} from 'react-router-dom'


export const NavBar = () => {
  return (
  <div className='flex mb-4 object-contain items-center justify-between'>
    <img 
    className=' h-[10vh] w-[15vw] px-0 outline-none object-cover '
    src='logo.svg' 
    alt='logo.svg'/>

    <input 
    type='text' 

    placehoder='Search for friends,post or video'
    className='h-[10px] border border-red-black  rounded-full p-4 m-4  text-black text-sm w-[30vw]' />

    <div className='flex items-center justify-between ml-2' >
      <div className='flex capitalize items-center justify-between px-auto '>
        <Link className='px-3'>homepage</Link>
        <Link>timeline</Link>
      </div>
      <div className='px-auto '>
        
      </div>

      <img 
      className='h-[42px] mr-3 object-cover rounded-full'
      src='profile-pic.jpg' 
      alt='profile_picture'/>
    </div>
  </div>
  )
}

export default NavBar
