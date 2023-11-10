// import './App.css';
// import Navbar from './components/navbar';

// function App() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Home from './layouts/home';
import SuccessMessage from "./layouts/SuccessMessage";
import ErrorMessage from "./layouts/ErrorMessage";
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Logout from './auth/Logout'
import PasswordReset from './auth/PasswordReset';
import Dashboard from './auth/Dashboard';
import Footer from './components/Footer'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ErrorMessage />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/reset-password" element={<PasswordReset />} />
          <Route exact path="/profile" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
