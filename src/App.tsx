import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Auth/Login"
import ProtectedRoute from "./components/common/ProtectedRoute"
import Home from "./pages/Home"
import Patients from "./pages/Patients"
import Appointments from "./pages/Appointments"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      
      <Route path="/" element={<ProtectedRoute/>}>
        <Route index element={<Home />} />
        <Route path="patients" element={<Patients />} />
          <Route path="appointments" element={<Appointments />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
