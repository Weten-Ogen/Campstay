import SettingsPage from  './SettingsPage'
import { PostHeader} from '../components/post/index'
const HomePage = () => {
  return (
    <div className='flex'>
      <SettingsPage className='w-2/4' />
      <main className='w-3/4 border max-w-xl ml-auto'>
        <PostHeader/>
      </main>
      <aside className='w-1/4 ml-auto mx-3 border max-w-md'>
        the aside
      </aside>
    </div>
  )
}

export default HomePage
