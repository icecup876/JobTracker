import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn"; // Import SignIn page
import SignUp from "./components/SignUp/SignUp"; // Import SignUp page
import HomePage from "./components/HomePage/HomePage"; // Example Home page component after login
import DashboardPage from "./components/Dashboard/Dashboard"; // Import DashboardPage
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <ConditionalLayout>
        <Routes>
          <Route path="/" element={<SignIn />} /> {/* Root path */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} /> {/* Add Dashboard route */}
        </Routes>
      </ConditionalLayout>
    </Router>
  );
}

// Component to conditionally render Navbar and Footer
function ConditionalLayout({ children }) {
  const location = useLocation();
  const hideLayout = ["/", "/signin", "/signup"].includes(location.pathname); // Add paths to hide Navbar and Footer

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
