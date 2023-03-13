import SettingLink from "../components/setting/SettingLink"
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom"


const Settings = () => {
  return (
    <div className="mx-2 border boder-black">
      <SettingLink 
        icon={<AiOutlineMenu px-2/>} name='menu' />
      <SettingLink 
       icon={<AiOutlineMenu px-2/>} name='menu' />
      <SettingLink 
       icon={<AiOutlineMenu px-2/>} name='menu' />
      <SettingLink 
       icon={<AiOutlineMenu px-2/>} name='menu' />
      <SettingLink 
       icon={<AiOutlineMenu px-2/>} name='menu' />
      <SettingLink 
       icon={<AiOutlineMenu px-2/>} name='menu' />
      <Link 
      className="inline-block mx-2 my-3  text-[12px] capitalize  bg-black/10 
      rounded-md py-[12px] px-[32px]"
      to='/settings'>show more</Link>      

    </div>
  )
}

export default Settings
