import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import TaskFlow from './pages/TaskFlow'


function App() {
  return (
   <Layout>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/tasks' element={<Tasks />}></Route>
      <Route path='/tasks/:id' element={<TaskFlow />}></Route>
    </Routes>
   </Layout>
  )
}

export default App
