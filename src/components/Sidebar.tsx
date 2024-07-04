"use client"
// components/Sidebar.tsx
import Image from 'next/image';
import React from 'react';
import { usePatientData } from '@/context/PatientDataContext';

const Sidebar: React.FC = () => {
  const { patients } = usePatientData();

  return (
    <div className='py-4'>
      <div className='flex justify-between px-6'>
        <h3 className='text-deepdark font-extrabold text-2xl'>Patients</h3>
        <Image src='/search.svg' width={18} height={18} alt='search icon' />
      </div>

      <div className='py-12 grid gap-6 overflow-y-scroll md:h-[1070px] custom-scrollbar ' >
        {patients.map((patient) => (
          <div key={patient.name} className='flex justify-between items-center px-6 hover:bg-Cyan py-2'>
            {/* Patient list */}
            <div className='flex gap-2 text-sm text-deepdark'>
              <Image src={patient.profile_picture} width={44} height={44} alt='Profile picture' className='rounded-full' />
              <div>
                <p className='font-bold'>{patient.name}</p>
                <p className='text-DarkSliver text-[14px]'>{patient.gender} ,{patient.age}</p>
              </div>
            </div>
            <Image src='more_hori.svg' width={18} height={3} alt='more icon' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
