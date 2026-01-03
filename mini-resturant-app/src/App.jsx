import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import {Routes, Route} from "react-router-dom";
function App(){
return (
  <Routes>
    <Route path="/" element = {<Login/>}/>

    <Route path="/admin/dashboard" element= { <PrivateRoute role="admin"> <AdminDashboard/></PrivateRoute>}/>
    <Route path="/customer/dashboard" element= { <PrivateRoute role="customer"> <CustomerDashboard/></PrivateRoute>}/>
  </Routes>
);
}

export default App;