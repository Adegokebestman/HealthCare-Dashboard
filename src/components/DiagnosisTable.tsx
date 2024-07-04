"use client"
import React from 'react';
import { usePatientData } from '../context/PatientDataContext';

const DiagnosisTable: React.FC = () => {
  const { selectedPatient } = usePatientData();
  const diagnosisList = selectedPatient?.diagnostic_list || [];

  return (
    <div className="overflow-x-auto bg-white py-4 px-6 rounded-2xl ">
      <table className="min-w-full ">
        <thead>
          <tr className='bg-LightGray ' >
            <th className="px-6 text-sm font-bold py-3 text-deepdark text-left  rounded-tl-full rounded-bl-full">
              Problem/Diagnosis
            </th>
            <th className="px-6 text-sm font-bold py-3 text-deepdark text-left ">
              Description
            </th>
            <th className="px-6 text-sm font-bold py-3 text-deepdark text-left  rounded-br-full rounded-tr-full ">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {diagnosisList.map((diagnosis, index) => (
            <tr key={index} >
              <td className="px-6 py-3 text-sm whitespace-no-wrap border-b border-gray-300">{diagnosis.name}</td>
              <td className="px-6 py-3 text-sm whitespace-no-wrap border-b border-gray-300">{diagnosis.description}</td>
              <td className="px-6 py-3 text-sm whitespace-no-wrap border-b border-gray-300">{diagnosis.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosisTable;
