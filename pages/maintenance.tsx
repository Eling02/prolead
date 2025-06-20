import Image from 'next/image';
import React from 'react';

const MaintenancePage: React.FC = () => {
  return (
    <div className="container">
      <div className="logo-wrapper">
        <Image
          src="/prolead_logo.png"
          alt="Prolead"
          layout="responsive"
          width={500}
          height={283}
        />
      </div>
      <h1>Under Construction</h1>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 0 1rem;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .logo-wrapper {
          width: 300px;
          margin-bottom: 1rem;
        }

        h1 {
          font-size: 2rem;
          margin: 1rem 0;
        }

        @media (max-width: 600px) {
          .logo-wrapper {
            width: 80%;
          }

          h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MaintenancePage;