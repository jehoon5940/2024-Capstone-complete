import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import UserManagementPage from './pages/User';
import FranchiseeManagePage from './pages/Franchisee';
import FranchiseeMenuPage from './pages/Franchisee/Menu';
import SeatManagementPage from './pages/Seat';
import ManageOrderPage from './pages/Manage/Order';
import ManageSalesPage from './pages/Manage/Sales';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserManagementPage />} />
        <Route path="/frachisee" element={<FranchiseeManagePage />} />
        <Route path='/frachisee/:id/menu' element={<FranchiseeMenuPage />} />
        <Route path="/frachisee/:id/seats" element={<SeatManagementPage />} /> 

        <Route path='/order' element={<ManageOrderPage />} /> 
        <Route path='/sales' element={<ManageSalesPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
