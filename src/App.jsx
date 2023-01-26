import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { Provider } from 'react-redux'
import store from './store/Store'
import './App.css'
// components
import Header from './components/header/Header'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header>
            <div className="container">
              <Routes>
                <Route path='' element={<Home />}></Route>
              </Routes>
            </div>
          </Header>
        </Router>
      </Provider>
    </div>
  )
}

export default App
