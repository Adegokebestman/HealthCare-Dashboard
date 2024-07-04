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
    <main className="py-4 px-6">
      <Navbar />
      <div className="grid grid-cols-auto md:grid-cols-12 md:grid-rows-12 gap-6 py-8">
         {/* Sidebar */}
         <div className={`bg-white md:relative  grid rounded-2xl md:col-span-3 h-auto  ${isSidebarOpen ? 'fixed ' : 'hidden md:block'}`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="md:col-span-6 col-span-2">
          <div className="bg-white rounded-2xl p-6">
             {/* Toggle button/icon for tablet and smaller screens */}
             <div className="md:hidden">
              <button className="absolute z-20 top-6 left-6 focus:outline-none" onClick={toggleSidebar}>
                <Image src="/download.svg" width={24} height={24} alt="Toggle sidebar" />
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
        <aside className="md:col-span-3 relative bottom-4">
          <div className="bg-white rounded-2xl p-6 mb-6">
            <PatientProfile />
          </div>

          <div className="bg-white rounded-2xl">
            <LabResult />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Dashboard;
