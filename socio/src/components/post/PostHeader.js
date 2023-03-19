import {ProfilePic} from '../post/index'
import SettingLink from '../setting/SettingLink'

const PostHeader = () => {
  return (
    <header className='max-w-xl border w-full px-1 mb-5
    shadow-md rounded-md '>
      <div className='max-w-lg flex flex-col relative   items-center pt-5'>
        <div className='relative top-2 left-12 w-full'>
          <input 
          className='text-lg max-w-md  relative  capitalize  px-5 py-5 w-ful'
          type='text'
          placeholder='what is on your mind ?'
          
          />
        </div>
       <div className='inline-block pt-5   absolute inset-0  left-1 my-3'>
        <ProfilePic/>
       </div>
      </div>
      <hr className='w-full h-[2px] my-6'/>
    </header>
  )
}

export default PostHeader
