import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';
//import './ProductManagement.css';

const ProductManagement = () => {
  return (
    <div className="product-management">
      <AdminNavbar />
      <div className="main-content">
        <Sidebar />
        <div className="management-content">
          <h2>Product Management</h2>
          {/* Add product management functionalities here */}
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
