import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import TaskPage from './pages/TaskPage'


function App() {
  return (
   <Layout>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/tasks' element={<Tasks />}></Route>

    </Routes>
   </Layout>
  )
}

export default App
