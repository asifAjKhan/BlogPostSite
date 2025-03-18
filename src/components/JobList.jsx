import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]); // State to store the fetched jobs
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error messages

  useEffect(() => {
    // Fetch data from the Express API using Axios
    axios
      .get('http://localhost:3000/api/jobs')  // Adjust the API URL if necessary
      .then((response) => {
        setJobs(response.data);  // Store the fetched jobs in state
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError('Error fetching job listings'); // Set error message if fetching fails
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if something went wrong
  }

  return (


    <div>
     <h1>Job Listings</h1>
     <ul>
       {jobs.map((job) => (
          <li key={job._id}>
            <p>Company: {job.companyName}</p>
           <p>Deadline: {job.deadline}</p>
           <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
           <p><strong>Education:</strong> {job.education.join(', ')}</p>
         </li>
       ))}
      </ul>
   </div>
    



   
  );
};

export default JobList;
