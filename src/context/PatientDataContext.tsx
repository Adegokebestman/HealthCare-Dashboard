"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BloodPressure {
  value: number;
  levels: string;
}

interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: {
    systolic: BloodPressure;
    diastolic: BloodPressure;
  };
  heart_rate: {
    value: number;
    levels: string;
  };
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: {
    value: number;
    levels: string;
  };
}

interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: Diagnostic[];
  lab_results: string[];
}

interface PatientDataContextProps {
  patients: Patient[];
  selectedPatient: Patient | null;
  setSelectedPatient: (patient: Patient) => void;
}

const PatientDataContext = createContext<PatientDataContextProps | undefined>(undefined);

export const usePatientData = () => {
  const context = useContext(PatientDataContext);
  if (context === undefined) {
    throw new Error('usePatientData must be used within a PatientDataProvider');
  }
  return context;
};

export const PatientDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
          Authorization: 'Basic ' + btoa('coalition:skills-test'),
        },
      });
      const data = await response.json();
      setPatients(data);
      setSelectedPatient(data[3]);
    };

    fetchPatients();
  }, []);

  return (
    <PatientDataContext.Provider value={{ patients, selectedPatient, setSelectedPatient }}>
      {children}
    </PatientDataContext.Provider>
  );
};
