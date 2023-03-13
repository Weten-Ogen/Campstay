import {Routes,BrowserRouter as Router, Route } from 'react-router-dom'
import {HomePage,FriendsPage,LoginPage,ProfilePage,SignUpPage,VideosPage,CoverPage,SettingsPage
} from  '../../pages/index'



const NavRoutes = ({children:Navbar}) => {
  return (
    <>
      <Router>
       {Navbar}
        <Routes>
          <Route path="/"  element={<CoverPage/>}/>
          <Route path='/home'  element={<HomePage/>}/>
          <Route path='/profile/:id'  element={<ProfilePage/>}/>
          <Route path='/auth/login'  element={<LoginPage/>}/>
          <Route path='/auth/signup'  element={<SignUpPage/>}/>
          <Route path='/videos'  element={<VideosPage/>}/>
          <Route path='/friends'  element={<FriendsPage/>}/>
          <Route path='/settings' element={<SettingsPage/>}></Route>
        </Routes>
        
      </Router>
    </>
  )
}

export default NavRoutes;
