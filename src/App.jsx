import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Tasks from './pages/Tasks'

import BC from './pages/primaryschool/Context'
import BS from './pages/primaryschool/Simulation'
import BE from './pages/primaryschool/EdgeCases'

import MC from './pages/highschool/Context'
import MS from './pages/highschool/Simulation'
import ME from './pages/highschool/EdgeCases'

import LC from './pages/lms/Context'
import LS from './pages/lms/Simulation'
import LE from './pages/lms/EdgeCases'

import Other from './pages/other/Index'
import Scenario from './pages/other/Scenario'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/taken' element={<Tasks />}></Route>

      <Route path='/basisschool/context' element={<BC />}></Route>
      <Route path='/basisschool/simulatie' element={<BS />}></Route>
      <Route path='/basisschool/edge-cases' element={<BE />}></Route>

      <Route path='/middelbare/context' element={<MC />}></Route>
      <Route path='/middelbare/simulatie' element={<MS />}></Route>
      <Route path='/middelbare/edge-cases' element={<ME />}></Route>

      <Route path='/lvs/context' element={<LC />}></Route>
      <Route path='/lvs/simulatie' element={<LS />}></Route>
      <Route path='/lvs/edge-cases' element={<LE />}></Route>

      <Route path='/overige' element={<Other />}></Route>
      <Route path='/overige/:id' element={<Scenario />}></Route>
    </Routes>
  )
}

export default App
