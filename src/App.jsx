import {
  Link,
  Outlet,
} from "react-router-dom";

import './App.css'

function App() {

  return (
    <div>
      <h1>Super Store New</h1>
      <nav>
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
