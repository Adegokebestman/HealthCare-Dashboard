"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PatientChart from "@/components/PatientChart";
import Image from "next/image";
import DiagnosisTable from "@/components/DiagnosisTable";
import PatientProfile from "@/components/PatientProfile";
import LabResult from "@/components/LabResult";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Initially open on larger screens

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <main className="py-4 md:px-6 px-3">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 md:gap-6 py-8">
         {/* Sidebar */}
         <div className={`bg-white lg:relative  grid rounded-2xl md:col-span-3 h-auto  ${isSidebarOpen ? 'fixed ' : 'hidden lg:block'}`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="tablet md:col-span-8   col-span-2 ">
          <div className="bg-white rounded-2xl p-6">
             {/* Toggle button/icon for tablet and smaller screens */}
             <div className="lg:hidden ">
              <button className="absolute z-20 bg-green rounded-full py-2 px-2 bottom-6 right-8 focus:outline-none" onClick={toggleSidebar}>
                <Image src="/sidebar.png" width={32} height={32} alt="Toggle sidebar" />
              </button>
            </div>
            <h1 className="text-deepdark font-extrabold text-2xl mb-6">Diagnosis History</h1>
            <PatientChart />
          </div>

          <div className="bg-white rounded-2xl p-6 mt-6 ">
            <h1 className="text-deepdark font-extrabold text-2xl mb-4">Diagnosis List</h1>
            <DiagnosisTable />
          </div>
        </main>

        {/* Aside Container */}
        <aside className="md:col-span-4 lg:col-span-3 md:relative bottom-4 ">
          <div className="bg-white rounded-2xl  mb-6">
            <PatientProfile />
          </div>

          <div className="bg-white rounded-2xl ">
            <LabResult />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Dashboard;
