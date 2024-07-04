"use client"
import Image from 'next/image';
import React from 'react';
import { usePatientData } from '../context/PatientDataContext';

const PatientProfile: React.FC = () => {
  const { selectedPatient } = usePatientData();

  if (!selectedPatient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='flex justify-center items-center pt-6'>
        <Image
          src={selectedPatient.profile_picture}
          width={200}
          height={200}
          alt='profile picture'
          className='rounded-full'
        />
      </div>
      <h1 className='text-center py-4 font-bold text-2xl'>{selectedPatient.name}</h1>

      <div className='flex items-center px-6 py-3 gap-2'>
        <Image src='/BirthIcon.svg' width={42} height={42} alt='birth calendar icon' />
        <span>
          <p className='text-sm'>Date of Birth</p>
          <p className='text-sm font-bold'>{selectedPatient.date_of_birth}</p>
        </span>
      </div>

      <div className='flex items-center px-6 py-3 gap-2'>
        <Image src='/FemaleIcon.svg' width={42} height={42} alt='Female icon' />
        <span>
          <p className='text-sm'>Gender</p>
          <p className='text-sm font-bold'>{selectedPatient.gender}</p>
        </span>
      </div>

      <div className='flex items-center px-6 py-3 gap-2'>
        <Image src='/PhoneIcon.svg' width={42} height={42} alt='Phone icon' />
        <span>
          <p className='text-sm'>Contact Info</p>
          <p className='text-sm font-bold'>{selectedPatient.phone_number}</p>
        </span>
      </div>

      <div className='flex items-center px-6 py-3 gap-2'>
        <Image src='/PhoneIcon.svg' width={42} height={42} alt='Emergency contact icon' />
        <span>
          <p className='text-sm'>Emergency Contact</p>
          <p className='text-sm font-bold'>{selectedPatient.emergency_contact}</p>
        </span>
      </div>

      <div className='flex items-center px-6 py-3 gap-2'>
        <Image src='/InsuranceIcon.svg' width={42} height={42} alt='Insurance icon' />
        <span>
          <p className='text-sm'>Insurance Provider</p>
          <p className='text-sm font-bold'>{selectedPatient.insurance_type}</p>
        </span>
      </div>

      <div className='flex justify-center py-8 '>
        <button className='bg-green py-2 px-6 rounded-full font-bold text-sm'> Show All Information </button>
      </div>
    </div>
  );
};

export default PatientProfile;
