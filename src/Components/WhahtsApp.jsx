import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhahtsApp() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2349025479011', '_blank');
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: '25px',
        left: '25px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 99999,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)',
        animation: 'whatsappBounce 2s infinite',
      }}
    >
      <FaWhatsapp size={34} color="white" />

      <style>
        {`
          @keyframes whatsappBounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }

            40% {
              transform: translateY(-12px);
            }

            60% {
              transform: translateY(-6px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default WhahtsApp;