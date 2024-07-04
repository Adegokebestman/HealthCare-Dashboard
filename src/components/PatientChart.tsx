"use client"
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import TimeframeDropdown from './TimeframeDropdown';
import { usePatientData } from '@/context/PatientDataContext';
import Image from 'next/image';

const PatientChart: React.FC = () => {
  const { selectedPatient } = usePatientData();
  const diagnosisHistory = selectedPatient?.diagnosis_history || [];

  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');
  const [filteredData, setFilteredData] = useState(diagnosisHistory);

  useEffect(() => {
    const sortData = (data: DiagnosisHistory[]) => {
      return data.sort((a, b) => {
        const dateA = new Date(`${a.year}-${new Date(`${a.month} 1, 2020`).getMonth() + 1}-01`);
        const dateB = new Date(`${b.year}-${new Date(`${b.month} 1, 2020`).getMonth() + 1}-01`);
        return dateA.getTime() - dateB.getTime();
      });
    };

    const filterData = () => {
      const sortedHistory = sortData(diagnosisHistory);
      const now = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(now.getMonth() - 6);

      if (selectedTimeframe === '6months') {
        return sortedHistory.filter((entry) => {
          const entryDate = new Date(`${entry.year}-${new Date(entry.month + ' 1, 2020').getMonth() + 1}-01`);
          return entryDate >= sixMonthsAgo && entryDate <= now;
        }).slice(-6); // Get the last 6 entries
      } else if (selectedTimeframe === 'yearly') {
        return sortedHistory.filter((entry) => entry.year === new Date().getFullYear());
      }

      return sortedHistory;
    };

    setFilteredData(filterData());
  }, [selectedTimeframe, diagnosisHistory]);

  const labels = filteredData.map((entry) => `${entry.month} ${entry.year}`);
  const systolicData = filteredData.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicData = filteredData.map((entry) => entry.blood_pressure.diastolic.value);

  const latestEntry = filteredData[filteredData.length - 1];
  const latestSystolic = latestEntry ? latestEntry.blood_pressure.systolic.value : 'N/A';
  const latestSystolicLevel = latestEntry ? latestEntry.blood_pressure.systolic.levels : 'N/A';
  const latestDiastolic = latestEntry ? latestEntry.blood_pressure.diastolic.value : 'N/A';
  const latestDiastolicLevel = latestEntry ? latestEntry.blood_pressure.diastolic.levels : 'N/A';
  const latestRespiratoryRate = latestEntry ? latestEntry.respiratory_rate.value : 'N/A';
  const latestRespiratoryLevel = latestEntry ? latestEntry.respiratory_rate.levels : 'N/A';
  const latestTemperature = latestEntry ? latestEntry.temperature.value : 'N/A';
  const latestTemperatureLevel = latestEntry ? latestEntry.respiratory_rate.levels : 'N/A';
  const latestHeartRate = latestEntry ? latestEntry.heart_rate.value : 'N/A';
  const latestHeartRateLevel = latestEntry ? latestEntry.heart_rate.levels : 'N/A';


  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Systolic Blood Pressure',
        data: systolicData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Diastolic Blood Pressure',
        data: diastolicData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Remove the label
      },
    },
  };

  return (

    <>

    <div className="grid md:grid-cols-6 bg-Magnolia rounded-xl py-2 px-2">
      <div className=' col-span-4'>
        <TimeframeDropdown selectedTimeframe={selectedTimeframe} onChange={setSelectedTimeframe} />
        <div className='w-auto h-auto'>
        <Line data={data} options={options} />
        </div>
      </div>
      <div className=" col-span-2">
        <div>
        <div className="text-lg flex items-center py-2 gap-2">
          <div className='rounded-full w-3 h-3 bg-Orchid'></div>
          <p className='text-sm font-bold text-deepdark'>Systolic: </p>
          </div>
          <span className='text-[22px] font-bold text-deepdark'>{latestSystolic}</span>
          <span className='flex gap-2 py-2'>
            <Image src='ArrowUp.svg' width={10} height={5.48} alt='arrowUp'/>
            <p className='text-sm'>{latestSystolicLevel}</p>
          </span>
          {/* line cutter */}
      <hr className='w-full border-[2px] my-2 bg-Silver' />
      {/* end of line cutter */}
          <div className="text-lg flex items-center gap-2 py-2">
          <div className='rounded-full w-3 h-3 bg-Orchid'></div>
          <p className='text-sm font-bold text-deepdark'>Diastolic: </p>
          </div>
          <span className='text-[22px] font-bold text-deepdark'>{latestDiastolic}</span>
          <span className='flex gap-2 py-2'>
            <Image src='ArrowDown.svg' width={10} height={5.48} alt='arrow down'/>
            <p className='text-sm'>{latestDiastolicLevel}</p>
          </span>
        </div>

          {/* <p>Diastolic: <span className="font-bold">{latestDiastolic}</span></p> */}

      </div>
    </div>

{/* temp */}
<div className='grid grid-cols-1 md:grid-cols-6 gap-4 py-6'>

      <div className='bg-LightBlue rounded-xl px-6 py-4 col-span-2'>
        <Image src='/respiratory rate.svg' width={96} height={96} alt='respiratory rate' />
        <p>Respiratory Rate</p>
        <h1 className='text-[30px] font-extrabold text-deepdark'>{latestRespiratoryRate} bpm</h1>
        <p className='pt-6'>{latestRespiratoryLevel}</p>
      </div>

      <div className='bg-MistyRose rounded-xl px-6 py-4 col-span-2'>
        <Image src='/respiratory rate.svg' width={96} height={96} alt='respiratory rate' />
        <p>Temperature </p>
        <h1 className='text-[30px] font-extrabold text-deepdark'>{latestTemperature}<sup>o</sup> F</h1>
        <p className='pt-6'>{latestTemperatureLevel}</p>
      </div>

      <div className='bg-LightPink rounded-xl px-6 py-4 col-span-2'>
        <Image src='/respiratory rate.svg' width={96} height={96} alt='respiratory rate' />
        <p>Heart Rate</p>
        <h1 className='text-[30px] font-extrabold text-deepdark'>{latestHeartRate} bpm</h1>
        <p className='pt-6'>{latestHeartRateLevel}</p>
      </div>
      </div>
    </>
  );
};

export default PatientChart;