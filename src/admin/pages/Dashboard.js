import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';
//import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <div className="main-content">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Dashboard</h2>
          {/* Add dashboard stats and charts here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
