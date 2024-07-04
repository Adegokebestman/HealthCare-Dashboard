import Image from 'next/image';
import React from 'react';
import { usePatientData } from '@/context/PatientDataContext';

const LabResult = () => {
  const { selectedPatient } = usePatientData();

  return (
    <div className='px-6 py-6'>
      <h1 className='text-2xl font-extrabold text-deepdark'>Lab Results</h1>
      <div className='py-4'>
        {selectedPatient?.lab_results.map((result, index) => (
          <div key={index} className='flex justify-between items-center py-2'>
            <h2 className='text-lg font-bold'>{result}</h2>
            <Image src='/download.svg' width={20} height={20} alt='Download icon' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabResult;
