import React from 'react';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo and Nav Links */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600">Music School</span>
              </div>
              <div className="ml-6 flex space-x-4 items-center">
                <Link to="/admin/schedule" className="text-gray-700 hover:text-blue-600">Daily Schedule</Link>
                <Link to="/admin/teachers" className="text-gray-700 hover:text-blue-600">Teachers</Link>
                <Link to="/admin/students" className="text-gray-700 hover:text-blue-600">Students</Link>
                <Link to="/admin/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link to="/admin/billing" className="text-gray-700 hover:text-blue-600">Billing</Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                New Appointment
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Check Daily
              </button>
              <button 
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4">
        <Routes>
          <Route path="schedule" element={<div>Schedule Component</div>} />
          <Route path="teachers" element={<div>Teachers Management</div>} />
          <Route path="students" element={<div>Students Management</div>} />
          <Route path="pricing" element={<div>Pricing Management</div>} />
          <Route path="billing" element={<div>Billing Management</div>} />
          <Route path="/" element={<div>Welcome to Admin Dashboard</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;