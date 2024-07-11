import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Setting from './components/setting';
import GiaoDich from './components/GiaoDich';
function App() {
  return (
  <Router>
      <div>
  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/setting' element={<Home><Setting/></Home>}/>
          <Route path='/deal' element={<Home><GiaoDich/></Home>}/>

        </Routes>
      </div>
    </Router>
  
  )
  }
export default App;
