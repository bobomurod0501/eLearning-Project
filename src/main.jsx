import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import HomePage from './pages/HomePage.jsx'
import AboutUs from './pages/AboutUs.jsx'
// import Courses from './pages/Courses.jsx'\
import NewCoursesPage from './NewCoursesPage.jsx'
import NewContactUs from './NewContact.jsx'
import ContactUs from './pages/ContactUs.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import NewCourseDetail from './NewCourseDetail.jsx'


const router = createBrowserRouter([
  {
   path: "/",
    element:<App />
  },
  {
    path:"/courses",
    element:<NewCoursesPage />
  },
  {
    path:"/contact",
    element:<NewContactUs />
  },
  {
    path:"/courses/:id",
    element:<NewCourseDetail />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
)
