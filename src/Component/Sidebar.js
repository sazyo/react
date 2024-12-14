import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <aside className="bg-gray-800 h-screen flex flex-col justify-between flex-wrap h-dvh" >
           

          
            <div className="md:p-5">
                
                <div className="hedar md:mb-4 md:py-3.5 ">
                    <h2 className="text-gray-200 ;">Dashboard</h2>
                </div>


                
                <nav className="links ">
                         <div className="flex flex-col gap-2" >
                        
                            <Link to="/" className="text-gray-400 hover:bg-gray-700 block py-2 md:px-3 rounded">
                                Overview
                            </Link>
                            <Link to="/village-management" className="text-gray-400 hover:bg-gray-700 block py-2 md:px-3 rounded">
                                Village Management
                            </Link>                      
                            <Link to="/" className="text-gray-400 hover:bg-gray-700 block py-2 md:px-3 rounded">
                                Chat
                            </Link>
                            <Link to="/"className="text-gray-400 hover:bg-gray-700 block py-2 md:px-3 rounded">
                                Gallery
                            </Link>
                        </div>
                </nav>
            </div>
            


             <div className="text-white flex flex-wrap justify-center items-center h-24">
                <img src="https://via.placeholder.com/40" alt="Admin" className="h-10 mr-2 rounded-full" />
                <p className="text-white">Admin Name</p>
                <a href="#" className="ml-2 text-red-500">Logout</a>
            </div>
        </aside>
    );
};

export default Sidebar;
