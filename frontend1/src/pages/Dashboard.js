import Menu from './Menu';
import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // CSS file for dashboard styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHome ,faSearch, faTh, faUser, faComments, faChartPie, faFolder, faShoppingCart, faHeart, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

    //fetch data
    const [tasks, setTasks] = useState([]);
    const [stats, setStats] = useState([])

    // Function to fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://noble-mutuwa.com:8000/api/v1/data/all-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // You may need to include the authentication token in the headers
            // 'Authorization': `Bearer ${yourAuthToken}`
          },
          // You can send any additional data or parameters needed for the request body
          // body: JSON.stringify({}),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTasks(data.data); // Assuming data is an array of tasks
        setStats(data.stats)
        console.log("this is stats", data.stats)
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., show error message to user)
      }
    };
  
    // Fetch data from backend when component is mounted
    useEffect(() => {
      fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once, on component mount
  
    //end of fetch data 
  return (
    <div className="dashboard">
      <Menu></Menu>
      <main className="main-content">

        <div class="content">
        
            <div class="card">
                <div class="icon">
                    <FontAwesomeIcon className="icons" icon={faHome} /> 
                </div>
                <p class="title">All TASKS -  {stats.completed}</p>
                <p class="text">Click to see all tasks.</p>
            </div>
        
        
            <div class="card">
                <div class="icon">
                    <FontAwesomeIcon className="icons" icon={faHome} /> 
                </div>
                <p class="title">Completed Taks - {stats.inprogress}</p>
                <p class="text">Check all your completed tasks</p>
            </div>
        
        
            <div class="card">
                <div class="icon">
                    <FontAwesomeIcon className="icons" icon={faHome} /> 
                </div>
                <p class="title">Assigned - {stats.assigned} </p>
                <p class="text">Check all your asssigned tasks.</p>
            </div>

        
        </div>

        <div class="container">
            <h4 className="tablehead">Recent tasks</h4>
            <table class="rwd-table">
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Story points</th>
                    <th>Created at</th>
                    <th>View</th>
                </tr>
                {tasks.map(task => (
                <tr>
                    <td data-th="Supplier Code">
                    {task.name}
                    </td>
                    <td data-th="Invoice Number">
                    {task.description}
                    </td>
                    <td data-th="Invoice Date">
                    {task.storypoint}
                    </td>
                    <td data-th="Due Date">
                    {task.created_at}
                    </td>
                    <td data-th="Net Amount">
                    view
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            <h3>Resize Me</h3>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
