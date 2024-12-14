import React from 'react';
import Sidebar from './Sidebar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import VillageManagement from './VillageManagement'; 

const MainPage = () => {
    return (
        <Router>
            <div className="page-container grid grid-cols-[20%_80%] h-screen ">
                {/* Sidebar */}
                <div>
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className=" ">
                    <Routes>
                        <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>} />
                        <Route path="/village-management" element={<VillageManagement />} />





                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default MainPage;
