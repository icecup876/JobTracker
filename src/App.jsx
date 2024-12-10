import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";  // Import SignIn page
import SignUp from "./components/SignUp/SignUp";  // Import SignUp page
import HomePage from "./components/HomePage/HomePage";  // Example Home page component after login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />  {/* Added route for root path */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
