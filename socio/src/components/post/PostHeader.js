import React from 'react'

const PostHeader = () => {
  return (
    <header className='max-w-xl border w-full px-2 py-2'>
      <div className='max-w-lg flex flex-col   relative   items-center'>
        <input 
        className=' text-xl relative left-[-60px] capitalize border-none py-5'
        type='text'
        placeholder='what is on your mind ?'
        
        />
        <img 
        className='absolute inline-block mx-0 my-auto inset-0 h-[60px] object-cover rounded-full'
         src='profile-pic.jpg' 
         alt='profile-pic'/>
      </div>
      <hr className='w-full h-[2px] my-4'/>
    </header>
  )
}

export default PostHeader
