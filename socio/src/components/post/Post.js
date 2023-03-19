import {ProfilePic}from "../../components/post/index"
import {HiDotsVertical} from 'react-icons/hi'



const Post = () => {
  return (
    <div className="mx-0 sm:mx-0 my-3 shadow-md  max-w-xl border drop-shadow-white-500 rounded-md ">
      <div className="flex justify-between items-center pl-2  pr-2">
        <div className="flex items-center py-2 max-w-md">
            <ProfilePic/>
            <p className="text-slate-900 font-bold">Safar Kiriku</p>
        </div>
        <HiDotsVertical className="text-xl"/>
      </div>
      <div> 
        <h2 className="max-w-xl my-2 pl-2 text-slate-800">Hello welcome home , you alright</h2 >
      </div>
      <div className="rounded-md max-w-md my-4 w-[95%] mx-auto">
        <img src='blackish.jpg' alt='posts'/>
      </div>
     
    </div>
  )
}

export default Post
