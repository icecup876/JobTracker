// Dashboard.js
import React from "react";
import "./Dashboard.css";

const FilterSection = () => {
  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3>Filters</h3>
        <button className="clear-btn">Clear All</button>
      </div>

      <div className="filter-category">
        <h4>Job Type</h4>
        <ul>
          <li>
            <input type="checkbox" id="all" />
            <label htmlFor="all">All (1143)</label>
          </li>
          <li>
            <input type="checkbox" id="full-time" />
            <label htmlFor="full-time">Full-Time (510)</label>
          </li>
          <li>
            <input type="checkbox" id="part-time" />
            <label htmlFor="part-time">Part-Time (324)</label>
          </li>
          <li>
            <input type="checkbox" id="remote" />
            <label htmlFor="remote">Remote (254)</label>
          </li>
          <li>
            <input type="checkbox" id="internship" />
            <label htmlFor="internship">Internship (65)</label>
          </li>
          <li>
            <input type="checkbox" id="contract" />
            <label htmlFor="contract">Contract (10)</label>
          </li>
        </ul>
      </div>

      <div className="filter-category">
        <h4>Work Type</h4>
        <ul>
          <li>
            <input type="checkbox" id="on-site" />
            <label htmlFor="on-site">On-Site</label>
          </li>
          <li>
            <input type="checkbox" id="remote-work" />
            <label htmlFor="remote-work">Remote</label>
          </li>
          <li>
            <input type="checkbox" id="hybrid" />
            <label htmlFor="hybrid">Hybrid</label>
          </li>
        </ul>
      </div>

      <div className="filter-category">
        <h4>Employment Type</h4>
        <ul>
          <li>
            <input type="checkbox" id="permanent" />
            <label htmlFor="permanent">Permanent</label>
          </li>
          <li>
            <input type="checkbox" id="temporary" />
            <label htmlFor="temporary">Temporary</label>
          </li>
        </ul>
      </div>

      <div className="filter-category">
        <h4>Job Functions</h4>
        <ul>
          <li>
            <input type="checkbox" id="developer" />
            <label htmlFor="developer">Developer</label>
          </li>
          <li>
            <input type="checkbox" id="designer" />
            <label htmlFor="designer">Designer</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

const JobCard = ({ title, description, type, level }) => (
  <div className="job-card color-0">
    <div className="card-header">
      <img
        src="https://via.placeholder.com/50"
        alt="Company Logo"
        className="company-logo"
      />
      <button className="bookmark">☆</button>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="card-footer">
      <span>{type}</span>
      <span>{level}</span>
    </div>
    <div className="card-buttons">
      <button className="details">Details</button>
      <button className="apply-now">Apply Now</button>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <FilterSection />
      <div className="results-container">
        <div className="results-header">
          <h2>Java Developer</h2>
          <span>Search Result (1143)</span>
        </div>
        <div className="cards-container">
          <JobCard
            title="Java Developer"
            description="Develop modern Java applications with backend integrations."
            type="Full-Time"
            level="Mid-Level"
          />
          <JobCard
            title="React Developer"
            description="Build interactive UIs using React.js and manage state efficiently."
            type="Remote"
            level="Senior"
          />
          <JobCard
            title="UX Designer"
            description="Design user-friendly interfaces that delight and engage users."
            type="Hybrid"
            level="Mid-Level"
          />
          <JobCard
            title="DevOps Engineer"
            description="Automate CI/CD pipelines and optimize cloud deployments."
            type="Full-Time"
            level="Entry-Level"
          />
          <JobCard
            title="Product Manager"
            description="Lead cross-functional teams to deliver impactful solutions."
            type="On-Site"
            level="Manager"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;