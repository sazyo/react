import React from 'react';

const VillageManagement = () => {
  return (
    <div className="  text-[#ced9e3] bg-[#1a202c] p-3   h-dvh" >
     
      <form className="space-y-4 ">
        <button
          type="button"
          id="openModal"
          className="bg-[#4a5568] hover:bg-[#323a46] text-[#ced9e3]e py-2 px-4 rounded"
        >
          Add New Village
        </button>
      </form>
      {/* Village List */}
      <div className="mt-6 bg-[#2d3748] p-3 rounded">
        <h3 className="text-xl font-bold">View Village List</h3>
        <form className="mt-4">
          <input
            type="text"
            id="search"
            placeholder="Search villages..."
            className="w-full p-2 bg-[#374151] text-[#ced9e3] rounded mb-4"
          />
          <div className="flex justify-between mb-4">
            <select
              id="sortBy"
              className="p-2 bg-[#374151] text-[#ced9e3] rounded"
            >
              <option value="default">Sort by: Default</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
            <div>
              <button type="button" className="p-2 bg-[#4a5568] hover:bg-[#323a46] text-[#ced9e3] rounded">Prev</button>
              <button type="button" className="ml-2 p-2 bg-[#4a5568] hover:bg-[#323a46] text-[#ced9e3] rounded">Next</button>
            </div>
          </div>
        </form>

        {/* Display Village Cards */}
        <div className="space-y-4">
          {/* Example Village Card */}
          <div className="bg-[#374151] p-4 rounded flex justify-between items-center">
            <span className="text-[#ced9e3]">Village Name</span>
            <button className="bg-[#4a5568] hover:bg-[#323a46] text-[#ced9e3] py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Close Function
const closeModal = () => {
  document.getElementById('addVillageModal').style.display = 'none';
};

export default VillageManagement;
