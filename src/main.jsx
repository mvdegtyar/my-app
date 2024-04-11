import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App from './App.jsx'
import About from './App.jsx'
import './index.css'


function Contact() {
  return (
    <>
      <h2>Contact</h2>
			<p>Lorem ipsum...</p>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
    ]
  },
], {
  basename: "/my-app"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
