// src/components/JobList/JobList.jsx

import React, { useState, useEffect } from "react";
import JobForm from "../JobForm/JobForm";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  // Load jobs from local storage when the component mounts
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);
  }, []);

  // Save jobs to local storage whenever jobs state changes
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Add new job to the state and local storage
  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  // Update job status and notes
  const updateJobStatus = (index, status, notes) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = status;
    updatedJobs[index].notes = notes;
    setJobs(updatedJobs);
  };

  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      <JobForm addJob={addJob} />

      <div className="jobs">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.companyName} - {job.position}</h3>
            <p>Status: {job.status}</p>
            <p>Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
            <p>Notes: {job.notes}</p>
            <div>
              <select
                value={job.status}
                onChange={(e) =>
                  updateJobStatus(index, e.target.value, job.notes)
                }
              >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
              <textarea
                value={job.notes}
                onChange={(e) =>
                  updateJobStatus(index, job.status, e.target.value)
                }
                placeholder="Add notes"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
