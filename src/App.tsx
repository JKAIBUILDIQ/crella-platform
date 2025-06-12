import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TutorSelection from './pages/TutorSelection'
import TalentMap from './pages/TalentMap'
import TaskConverter from './pages/TaskConverter'
import UberTasks from './pages/UberTasks'
import Concierge from './pages/Concierge'
import CrellaSuites from './pages/CrellaSuites'
import CustomerInterface from './pages/CustomerInterface'
import HandlerInterface from './pages/HandlerInterface'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tutors" element={<TutorSelection />} />
          <Route path="/talent-map" element={<TalentMap />} />
          <Route path="/task-converter" element={<TaskConverter />} />
          <Route path="/ubertasks" element={<UberTasks />} />
          <Route path="/concierge" element={<Concierge />} />
          <Route path="/crella-suites" element={<CrellaSuites />} />
          <Route path="/customer" element={<CustomerInterface />} />
          <Route path="/handler" element={<HandlerInterface />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
