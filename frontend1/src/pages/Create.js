import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import { showToast } from './components/toast';
import $ from 'jquery';

function Create() {
    const [ticketData, setTicketData] = useState({
        name: '',
        description: '',
        status: 'Assigned', 
        storypoint: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicketData({ ...ticketData, [name]: value });
    };

    const handleSave = () => {
        console.log("Creating ticket:", ticketData);
    
        $.ajax({
            url: 'http://noble-mutuwa.com:8000/api/v1/task/create',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(ticketData),
            success: (response) => {
                console.log('Response:', response);
                
                showToast('Success', 'Ticket created successfully');
            },
            error: (xhr, status, error) => {
                console.error('Error:', error);
                showToast('Error', 'Failed to create ticket');
            }
        });
    };
    

    return (
        <>
            <Menu />
            <h4 className="tablehead1">Task </h4>
            <div className="view-container">
                
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={ticketData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input id="description" name="description" value={ticketData.description} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select id="status" name="status" value={ticketData.status} onChange={handleChange} className="select-field">
                        <option value="InProgress">In Progress</option>
                        <option value="Assigned">Assigned</option>
                        <option value="Complete">Completed</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="storypoint">Story Point:</label>
                    <input type="number" id="storypoint" name="storypoint" value={ticketData.storypoint} onChange={handleChange} />
                </div>
                <button className="savetic" onClick={handleSave}>Create Ticket</button>
            </div>
        </>
    );
}

export default Create;
