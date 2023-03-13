import NavRoutes from './components/routes/NavRoutes'
import {NavBar} from  './components/common/index'

function App() {
  return (
    <div className="App">
      <NavRoutes>
        <NavBar/>
      </NavRoutes>
    </div>
  );
}

export default App;
