import React from 'react';
import Menu from './Menu';
import './Dashboard.css'; // CSS file for dashboard styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHome ,faSearch, faTh, faUser, faComments, faChartPie, faFolder, faShoppingCart, faHeart, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
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
                    <th>Supplier Code</th>
                    <th>Supplier Name</th>
                    <th>Invoice Number</th>
                    <th>Invoice Date</th>
                    <th>Due Date</th>
                    <th>Net Amount</th>
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
                <tr>
                    <td data-th="Supplier Code">
                    UPS3449
                    </td>
                    <td data-th="Supplier Name">
                    UPS South Inc.
                    </td>
                    <td data-th="Invoice Number">
                    ASDF29301
                    </td>
                    <td data-th="Invoice Date">
                    6/24/2016
                    </td>
                    <td data-th="Due Date">
                    12/25/2016
                    </td>
                    <td data-th="Net Amount">
                    $3,255.49
                    </td>
                </tr>
                <tr>
                    <td data-th="Supplier Code">
                    BOX5599
                    </td>
                    <td data-th="Supplier Name">
                    BOX Pro West
                    </td>
                    <td data-th="Invoice Number">
                    ASDF43000
                    </td>
                    <td data-th="Invoice Date">
                    6/27/2016
                    </td>
                    <td data-th="Due Date">
                    12/25/2016
                    </td>
                    <td data-th="Net Amount">
                    $45,255.49
                    </td>
                </tr>
                <tr>
                    <td data-th="Supplier Code">
                    PAN9999
                    </td>
                    <td data-th="Supplier Name">
                    Pan Providers and Co.
                    </td>
                    <td data-th="Invoice Number">
                    ASDF33433
                    </td>
                    <td data-th="Invoice Date">
                    6/29/2016
                    </td>
                    <td data-th="Due Date">
                    12/25/2016
                    </td>
                    <td data-th="Net Amount">
                    $12,335.69
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
