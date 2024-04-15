import Menu from './Menu';
import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // CSS file for dashboard styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHome ,faSearch, faTh, faUser, faComments, faChartPie, faFolder, faShoppingCart, faHeart, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

    //fetch data
    const [tasks, setTasks] = useState([]);

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
        console.log(data.data)
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
                <p class="title">All TASKS</p>
                <p class="text">Click to see or edit your profile page.</p>
            </div>
        
        
            <div class="card">
                <div class="icon">
                    <FontAwesomeIcon className="icons" icon={faHome} /> 
                </div>
                <p class="title">Completed Taks</p>
                <p class="text">Check all your favourites in one place.</p>
            </div>
        
        
            <div class="card">
                <div class="icon">
                    <FontAwesomeIcon className="icons" icon={faHome} /> 
                </div>
                <p class="title">Assigned</p>
                <p class="text">Add or change your contacts and links.</p>
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
                    <th>Due Date</th>
                    <th>View</th>
                </tr>
                <tr>
                    <td data-th="Supplier Code">
                    UPS5005
                    </td>
                    <td data-th="Supplier Name">
                    UPS
                    </td>
                    <td data-th="Invoice Number">
                    ASDF19218
                    </td>
                    <td data-th="Invoice Date">
                    06/25/2016
                    </td>
                    <td data-th="Due Date">
                    12/25/2016
                    </td>
                    <td data-th="Net Amount">
                    $8,322.12
                    </td>
                </tr>
                </tbody>
            </table>
            <h3>Resize Me</h3>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
