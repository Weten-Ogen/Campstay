import NavRoutes from './components/routes/NavRoutes'
import {Footer,Header} from  './components/common/index'

function App() {
  return (
    <div className="App">
      <NavRoutes>
          <Header/>
          <Footer/>
      </NavRoutes>
    </div>
  );
}

export default App;
