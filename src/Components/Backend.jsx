import React, { useState } from 'react';
import Styles from '../Styles/Backend.module.css';
import { FaNodeJs } from 'react-icons/fa';
import CurriculumModal from '../Components/CurriculumModal';
function Backend() {
  const [physicalPackage, setPhysicalPackage] = useState('standard');
  const [virtualPackage, setVirtualPackage] = useState('standard');

  const getPackageData = (type, packageType) => {
    const isStandard = packageType === 'standard';
    const baseAmount = type === 'physical' ? 220000 : 180000;
    const amount = isStandard ? baseAmount : baseAmount + 100000;

    return {
      name: isStandard
        ? 'Become a Backend Developer'
        : 'Backend Developer + Freelancer Knowledge',
      amount,
      upfront: Math.round(amount * 0.9), // 10% off
      installment: Math.round((amount * 0.93) / 2) // 7% off, split into 2
    };
  };

  return (
    <div className={Styles.Price}>
      <div className={Styles.priceContainer}>
        <div className={Styles.header}>
          <div className={Styles.headerContent}>
            <div className={Styles.illustration}>
           <div className={Styles.illustrationBox}>
                {/* ✅ Backend icon */}
                <FaNodeJs className={Styles.fullstackIcon} color="#68A063" />
              </div>
            </div>
            <div className={Styles.headerText}>
              <h2 className={Styles.title}>Backend Engineer</h2>
              <p className={Styles.description}>
                A Backend Engineer specializes in building the server-side logic,
                managing databases, and ensuring systems run efficiently and securely.
                They power the functionality of applications and work closely with
                frontend developers to deliver complete solutions.
              </p>
<CurriculumModal>
                  <button className={Styles.curriculumButton}>
                    View Curriculum
                  </button>
                </CurriculumModal> 
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

export default Backend;
