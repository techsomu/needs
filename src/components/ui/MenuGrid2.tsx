import { CctvIcon, HomeIcon, LucideHome, PlugIcon, SwatchBookIcon } from 'lucide-react';
import React from 'react';
import { FaDraftingCompass, FaVideo, FaLaptopCode, FaBolt, FaHome } from 'react-icons/fa';
import styled from 'styled-components';

const MenuGrid: React.FC = () => {
    const menuItems = [
        { id: 1, title: 'Architect', description: 'Design building structures', icon: <HomeIcon color="#4CAF50" size="8em" />, link: '/Architect' },// Changed to green
        { id: 2, title: 'CCTV Technician', description: 'Install and maintain CCTV systems', icon: <CctvIcon color="#FF6347" size="3em" /> }, // Changed to tomato red
        { id: 3, title: 'Web Developer', description: 'Build and maintain websites', icon: <FaLaptopCode color="#00CED1" size="3em" /> }, // Changed to dark turquoise
        { id: 4, title: 'Electrician', description: 'Install and repair electrical systems', icon: <PlugIcon color="#e41414" size="8rem" /> }, // Kept as yellow
      ];
      

  return (
    <GridWrapper>
      <div className="grid">
        {menuItems.map((item) => (
          <div className="card" key={item.id}>
            <div className="bg uwu" />
            <div className="bg" />
            <div className="content">
              <div className="img">{item.icon}</div>
              <div className="h1">{item.title}</div>
              <div className="p">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </GridWrapper>
    
  );
};

const GridWrapper = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 30px;
    padding: 16px;
  }

  .card {
    position: relative;
    width: 100%;
    color: white;
    height: 260px;
    background: #444;
    border-radius: 14px;
  }

  .bg {
    position: absolute;
    z-index: -1;
    inset: -4px;
    border-radius: 16px;
    overflow: hidden;
  }

  .uwu {
    filter: blur(8px);
    transition: filter 0.3s;
  }

  .bg::before {
    content: '';
    position: absolute;
    aspect-ratio: 1/1;
    top: 50%;
    left: 50%;
    min-width: 150%;
    min-height: 150%;
    background-image: conic-gradient(
      hsl(0, 100%, 50%),
      hsl(30, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(90, 100%, 50%),
      hsl(120, 100%, 50%),
      hsl(150, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(210, 100%, 50%),
      hsl(240, 100%, 60%),
      hsl(270, 100%, 50%),
      hsl(300, 100%, 50%),
      hsl(330, 100%, 50%),
      hsl(360, 100%, 50%)
    );
    animation: speeen 4s linear infinite;
    transform-origin: 0% 0%;
    transform: rotate(0deg) translate(-50%, -50%);
  }

  @keyframes speeen {
    from {
      transform: rotate(0deg) translate(-50%, -50%);
    }

    to {
      transform: rotate(360deg) translate(-50%, -50%);
    }
  }

  .content {
    position: relative;
    padding: 14px 16px;
  
  }

  .img {
    height: 5em;
    width: 5em;
    margin: auto;
    background-color: #12d0f133;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img svg {
    height: 60%;
    fill: #ffffff;
  }

  .content div {
    text-align: center;
  }

  .h1 {
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1em;
    font-weight: 600;
  }

  .p {
    font-size: 0.75em;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;

// Placeholder icons
const ArchitectIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L1 21h22L12 2zm0 3.84l7.53 13.16H4.47L12 5.84z" />
  </svg>
);

const CctvTechnicianIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10V4H4v6H2v2h4v6h12v-6h4v-2h-2zm-6 6H10v-4h4v4z" />
  </svg>
);

const WebDeveloperIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4v16h20V4H2zm18 14H4V8h16v10zm-6-8h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-4h2v2H8v-2zm0 4h2v2H8v-2z" />
  </svg>
);

const ElectricianIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3v8h5L11 21v-8H6l7-10z" />
  </svg>
);

export default MenuGrid;