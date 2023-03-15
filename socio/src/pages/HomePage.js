import SettingsPage from  './SettingsPage'
import { PostHeader, Post} from '../components/post/index'
const HomePage = () => {
  return (
    <div className='flex-cols w-full sm:flex gap-4  '>
      <SettingsPage className='hidden sm:block border row-span-full' />
      <main className='col-span-2'>
        <PostHeader/>
        <Post/>
        <Post/>

      </main>
      <aside className='w-1/4 ml-auto mx-3 border max-w-md'>
        the aside
      </aside>
    </div>
  )
}

export default HomePage
