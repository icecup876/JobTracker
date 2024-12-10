import React from "react";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Job Application Tracker</h1>
          <p className="hero-subtext">
            Unlock endless opportunities and find your dream job today.
          </p>
          <div className="promo-banner">
            <span>🚀 Limited Offer: 50% Off on All Courses</span>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </header>

      {/* Job Statistics Section */}
      <section className="job-stats">
        <h2>Discover Job Opportunities</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>44.5k</h3>
            <p>Remote Jobs</p>
          </div>
          <div className="stat-card">
            <h3>66.8k</h3>
            <p>Full Time Jobs</p>
          </div>
          <div className="stat-card">
            <h3>38.9k</h3>
            <p>Part Time Jobs</p>
          </div>
        </div>
      </section>

      {/* Recent Jobs Section */}
      <section className="recent-jobs">
        <h2>Recent Job Listings</h2>
        <div className="job-grid">
          <div className="job-card">
            <h3>Product Designer</h3>
            <p>Apple Inc. - California, USA</p>
            <p className="salary">$15K/Month</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Software Engineer</h3>
            <p>Google - New York, USA</p>
            <p className="salary">$18K/Month</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>UX Designer</h3>
            <p>Meta - California, USA</p>
            <p className="salary">$14K/Month</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>Amazon - Seattle, USA</p>
            <p className="salary">$12K/Month</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Data Scientist</h3>
            <p>Microsoft - Washington, USA</p>
            <p className="salary">$20K/Month</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Marketing Specialist</h3>
            <p>Netflix - Los Angeles, USA</p>
            <p className="salary">$10K/Month</p>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
