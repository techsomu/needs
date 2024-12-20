import React from 'react';

interface ProfileCardProps {
  id: number;
  name: string;
  profession: string;
  about: string;
  phonenumber: string;
  location: {
    latitude: string;
    longitude: string;
  };
}

const ProfileCard = ({ id, name, profession, about, phonenumber, location }: ProfileCardProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <img
          src="/default-user-icon.png"
          alt="User Icon"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-600">ID: {id}</p>
          <p className="text-sm text-gray-600">Profession: {profession}</p>
        </div>
      </div>

      <p className="mb-2">{about}</p>

      <a
        href={`tel:${phonenumber}`}
        className="inline-block bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
      >
        Call Now: {phonenumber}
      </a>

      <p className="mt-2 text-sm text-gray-500">
        Location: Latitude {location.latitude}, Longitude {location.longitude}
      </p>
    </div>
  );
};

export default ProfileCard;
