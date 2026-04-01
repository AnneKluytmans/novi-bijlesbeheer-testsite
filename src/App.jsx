import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'

import Task1Context from "./pages/task1/Task1Context";
import Task1Simulation from "./pages/task1/Task1Simulation";
import Task1EdgeCases from "./pages/task1/Task1EdgeCases";
import Task1WrapUp from "./pages/task1/Task1WrapUp";

import Task2Context from "./pages/task2/Task2Context";
import Task2Simulation from "./pages/task2/Task2Simulation";
import Task2EdgeCases from "./pages/task2/Task2EdgeCases";
import Task2WrapUp from "./pages/task2/Task2WrapUp";

import Task3Context from "./pages/task3/Task3Context";
import Task3Simulation from "./pages/task3/Task3Simulation";
import Task3EdgeCases from "./pages/task3/Task3EdgeCases";
import Task3WrapUp from "./pages/task3/Task3WrapUp";

import Task4Context from "./pages/task4/Task4Context";
import Task4Simulation from "./pages/task4/Task4Simulation";
import Task4EdgeCases from "./pages/task4/Task4EdgeCases";
import Task4WrapUp from "./pages/task4/Task4WrapUp";

import Task5Context from "./pages/task5/Task5Context";
import Task5Simulation from "./pages/task5/Task5Simulation";
import Task5EdgeCases from "./pages/task5/Task5EdgeCases";
import Task5WrapUp from "./pages/task5/Task5WrapUp";

import Task6Context from "./pages/task6/Task6Context";
import Task6Simulation from "./pages/task6/Task6Simulation";
import Task6EdgeCases from "./pages/task6/Task6EdgeCases";
import Task6WrapUp from "./pages/task6/Task6WrapUp";

function App() {
  return (
   <Layout>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/taken' element={<Tasks />}></Route>

      <Route path="/taak/1/context" element={<Task1Context />} />
      <Route path="/taak/1/simulatie" element={<Task1Simulation />} />
      <Route path="/taak/1/edge-cases" element={<Task1EdgeCases />} />
      <Route path="/taak/1/afronding" element={<Task1WrapUp />} />

      <Route path="/taak/2/context" element={<Task2Context />} />
      <Route path="/taak/2/simulatie" element={<Task2Simulation />} />
      <Route path="/taak/2/edge-cases" element={<Task2EdgeCases />} />
      <Route path="/taak/2/afronding" element={<Task2WrapUp />} />

      <Route path="/taak/3/context" element={<Task3Context />} />
      <Route path="/taak/3/simulatie" element={<Task3Simulation />} />
      <Route path="/taak/3/edge-cases" element={<Task3EdgeCases />} />
      <Route path="/taak/3/afronding" element={<Task3WrapUp />} />

      <Route path="/taak/4/context" element={<Task4Context />} />
      <Route path="/taak/4/simulatie" element={<Task4Simulation />} />
      <Route path="/taak/4/edge-cases" element={<Task4EdgeCases />} />
      <Route path="/taak/4/afronding" element={<Task4WrapUp />} />

      <Route path="/taak/5/context" element={<Task5Context />} />
      <Route path="/taak/5/simulatie" element={<Task5Simulation />} />
      <Route path="/taak/5/edge-cases" element={<Task5EdgeCases />} />
      <Route path="/taak/5/afronding" element={<Task5WrapUp />} />

      <Route path="/taak/6/context" element={<Task6Context />} />
      <Route path="/taak/6/simulatie" element={<Task6Simulation />} />
      <Route path="/taak/6/edge-cases" element={<Task6EdgeCases />} />
      <Route path="/taak/6/afronding" element={<Task6WrapUp />} />

    </Routes>
   </Layout>
  )
}

export default App
