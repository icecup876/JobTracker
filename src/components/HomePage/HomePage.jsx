import React from "react";
import "./HomePage.css";
import userImage from "../../assets/images/guy-watching@2x.png";
import easyJobsLogo from "../../assets/images/easyjobs-logo.png";
import wpDeveloperLogo from "../../assets/images/wpdeveloper-logo.png";
import reviewXLogo from "../../assets/images/reviewx-logo.jpg";
import templatleyLogo from "../../assets/images/templatley-logo.png";
import { FaUserTie, FaUsers, FaUserCircle } from "react-icons/fa"; 
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>
          Find The Perfect Job With <span className="highlight">JobTracker</span>
        </h1>
        <p>
          Streamline your job-seeking experience and find countless job openings
          around you using JobTracker, the best job board!
        </p>
         <div className="search-bar">
          <input type="text" placeholder="Find Your Job..." />
          <select>
            <option value="">Job Type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="tester">Tester</option>
            <option value="sys-admin">System Administrator</option>
            <option value="network-admin">Network Administrator</option>
            <option value="data-scientist">Data Scientist</option>
            <option value="cloud-engineer">Cloud Engineer</option>
            <option value="ai-engineer">AI Engineer</option>
            <option value="product-manager">Product Manager</option>
          </select>
          <button>Search</button>
        </div>
        <div className="trusted-companies">
          <p>Trusted By 25,000+ Top Companies</p>
          <div className="logos">
            <img src={easyJobsLogo} alt="Easy Jobs" className="company-logo" />
            <img src={wpDeveloperLogo} alt="WPDeveloper" className="company-logo" />
            <img src={reviewXLogo} alt="ReviewX" className="company-logo" />
            <img src={templatleyLogo} alt="Templately" className="company-logo" />
          </div>
        </div>
      </div>
      <div className="image-section">
  <div className="circular-background">
    <img src={userImage} alt="User" />
  </div>
  <div className="stat total-applications">
    <FaUserTie size={32} style={{ marginBottom: "10px", color: "#4caf50" }} />
    <p>Total Applications</p>
  </div>
  <div className="stat java-developer">
    <FaUserCircle size={32} style={{ marginBottom: "10px", color: "#4caf50" }} />
    <p>Java Developer</p>
  </div>
  <div className="stat jobs-listed">
    <FaUsers size={32} style={{ marginBottom: "10px", color: "#4caf50" }} />
    <p>250+ Jobs Listed</p>
  </div>
</div>

    </div>
  );
};

export default Homepage;