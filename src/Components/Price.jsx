import React, { useState } from 'react';
import Styles from '../Styles/Price.module.css';
import { FaReact } from "react-icons/fa";




function Price() {
  const [physicalPackage, setPhysicalPackage] = useState('standard');
  const [virtualPackage, setVirtualPackage] = useState('standard');

  const getPackageData = (type, packageType) => {
    const isStandard = packageType === 'standard';
    const baseAmount = type === 'physical' ? 400000 : 360000;
    const amount = isStandard ? baseAmount : baseAmount + 100000;
    
    return {
      name: isStandard ? 'Become a Software Developer' : 'Become a Software Developer + Freelancer Knowledge',
      amount,
      upfront: Math.round(amount * 0.9),
      installment: Math.round((amount * 0.93) / 2)
    };
  };

  return (
    <div className={Styles.Price}>
      <div className={Styles.priceContainer}>
        <div className={Styles.header}>
          <div className={Styles.headerContent}>
            <div className={Styles.illustration}>
        <div className={Styles.illustrationBox}>
  <FaReact className={Styles.fullstackIcon} />
</div>
            </div>
            <div className={Styles.headerText}>
              <h2 className={Styles.title}>Fullstack Engineer</h2>
              <p className={Styles.description}>
                A Fullstack Engineer is a versatile Software Engineer skilled in both 
                frontend and backend development. They can design user-friendly 
                interfaces, build efficient server-side logic, and manage databases. 
                With their broad expertise, Fullstack Engineers are highly valued 
                for creating complete end-to-end solutions.
              </p>
              <button className={Styles.curriculumButton}>View Curriculum</button>
            </div>
          </div>
        </div>

        <div className={Styles.paymentSection}>
          {/* Physical Class */}
          <div className={Styles.paymentCard}>
            <h3 className={Styles.paymentTitle}>Payment mode for Physical class</h3>
            
            <div className={Styles.packageTabs}>
              <button 
                className={`${Styles.tab} ${physicalPackage === 'standard' ? Styles.active : ''}`}
                onClick={() => setPhysicalPackage('standard')}
              >
                Standard Package
              </button>
              <button 
                className={`${Styles.tab} ${physicalPackage === 'expert' ? Styles.active : ''}`}
                onClick={() => setPhysicalPackage('expert')}
              >
                Expert Package
              </button>
            </div>

            <div className={Styles.packageDetails}>
              {(() => {
                const data = getPackageData('physical', physicalPackage);
                return (
                  <>
                    <h4 className={Styles.packageName}>{data.name}</h4>
                    <p className={Styles.duration}><strong>Duration:</strong> 6 Months</p>
                    <p className={Styles.amount}><strong>Amount:</strong> ₦{data.amount.toLocaleString()}</p>
                    
                    <div className={Styles.paymentOptions}>
                      <h5>Payment Options:</h5>
                      <ul className={Styles.optionsList}>
                        <li>1. Payment Upfront: <strong>₦{data.upfront.toLocaleString()}</strong> (10% off)</li>
                        <li>2. Pay Twice: <strong>₦{data.installment.toLocaleString()}</strong> (7% off per installment)</li>
                      </ul>
                      <div className={Styles.physicalLocation}>
                           <div className={Styles.packageTabs}></div>
                        <h6>Location:</h6>
                        <p>Physical classes are held in Ede, Osogbo</p>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Virtual Class */}
          <div className={Styles.paymentCard}>
            <h3 className={Styles.paymentTitle}>Payment mode for Virtual students</h3>
            
            <div className={Styles.packageTabs}>
              <button 
                className={`${Styles.tab} ${virtualPackage === 'standard' ? Styles.active : ''}`}
                onClick={() => setVirtualPackage('standard')}
              >
                Standard Package
              </button>
              <button 
                className={`${Styles.tab} ${virtualPackage === 'expert' ? Styles.active : ''}`}
                onClick={() => setVirtualPackage('expert')}
              >
                Expert Package
              </button>
            </div>

            <div className={Styles.packageDetails}>
              {(() => {
                const data = getPackageData('virtual', virtualPackage);
                return (
                  <>
                    <h4 className={Styles.packageName}>{data.name}</h4>
                    <p className={Styles.duration}><strong>Duration:</strong> 6 Months</p>
                    <p className={Styles.amount}><strong>Amount:</strong> ₦{data.amount.toLocaleString()}</p>
                    
                    <div className={Styles.paymentOptions}>
                      <h5>Payment Options:</h5>
                      <ul className={Styles.optionsList}>
                        <li>1. Payment Upfront: <strong>₦{data.upfront.toLocaleString()}</strong> (10% off)</li>
                        <li>2. Pay Twice: <strong>₦{data.installment.toLocaleString()}</strong> (7% off per installment)</li>
                      </ul>
                      
                      <div className={Styles.virtualClass}>
                        <h6>Virtual Class:</h6>
                        <p>2 hours per day schedule, usually hosted on Google Meet</p>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;