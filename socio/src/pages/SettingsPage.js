import SettingLink from "../components/setting/SettingLink"
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom"
import {MdRssFeed} from 'react-icons/md'
import {BsChatText,BsPerson} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'


const Settings = () => {
  return (
    <div className=" border boder-black">
      <SettingLink 
        icon={<MdRssFeed/>} name='feed' />
      <SettingLink 
       icon={<BsChatText/>} name='chat' />
      <SettingLink 
       icon={<FaUserFriends/>} name='groups' />
      <SettingLink 
       icon={<BsPerson/>} name='friends' />
      <SettingLink 
       icon={<FiSettings/>} name='settings' />
      <SettingLink 
       icon={<AiOutlineMenu/>} name='menu' />
      <Link 
      className="inline-block mx-2 my-3  text-[12px] capitalize  bg-black/10 
      rounded-md py-[12px] px-[32px]"
      to='/settings'>show more</Link>      

    </div>
  )
}

export default Settings
