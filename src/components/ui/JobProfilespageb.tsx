import React from 'react';
import JobProfileGrid from './JobProfileComponents';

const profiles = [
  {
    id: '1',
    name: 'Soma Sekhar',
    jobRole: 'Cctv Technician',
    Experience:' nine years',
    services: ['Installation', 'Service/Repair'],
    workLocation: 'Rajahmundry,Kovvur,Near By Areas',
    phoneNumber: '+919652575313',
  },
 
  // Add more profiles as needed
];

const JobProfilesPage: React.FC = () => {
  return (
    <div className="bg-gray-300 mt-2 min-h-30 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cctv Security Systems</h1>
      <JobProfileGrid profiles={profiles} />
    </div>
  );
};

export default JobProfilesPage;
