// components/TimeframeDropdown.tsx
import React from 'react';

interface TimeframeDropdownProps {
  selectedTimeframe: string;
  onChange: (timeframe: string) => void;
}

const TimeframeDropdown: React.FC<TimeframeDropdownProps> = ({ selectedTimeframe, onChange }) => {
  return (
    <div className="mb-4 py-2 px-4 flex justify-between items-center ">
        <h1 className='text'>Blood Pressure</h1>

      <select
        id="timeframe"
        value={selectedTimeframe}
        onChange={(e) => onChange(e.target.value)}
        className="pr-2 noAppearance text-sm"
      >
        <option  value="6months">Last 6 Months</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default TimeframeDropdown;
