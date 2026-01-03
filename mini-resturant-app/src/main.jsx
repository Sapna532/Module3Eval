// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import ReactDOM from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
 ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider><App/></AuthProvider></BrowserRouter>
 );
