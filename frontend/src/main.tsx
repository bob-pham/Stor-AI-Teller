import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage'
import Storybook from './Storybook'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Router>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/my-storybook" element={<Storybook />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
