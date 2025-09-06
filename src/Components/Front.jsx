import React, { useState } from 'react'
import Styles from '../Styles/Front.module.css'
import { FaHtml5 } from 'react-icons/fa';
import CurriculumModal from '../Components/CurriculumModal';
function Front() {
  const [physicalPackage, setPhysicalPackage] = useState('standard');
  const [virtualPackage, setVirtualPackage] = useState('standard');

  const getPackageData = (type, packageType) => {
    const isStandard = packageType === 'standard';
    const baseAmount = type === 'physical' ? 220000 : 180000;
    const amount = isStandard ? baseAmount : baseAmount + 100000;
    
    return {
      name: isStandard 
        ? 'Become a Frontend Developer' 
        : 'Become a Frontend Developer + Freelancer Knowledge',
      amount,
      upfront: Math.round(amount * 0.9),   // 10% discount
      installment: Math.round((amount * 0.93) / 2) // 7% discount split into 2
    };
  };

  return (
    <div className={Styles.Price}>
      <div className={Styles.priceContainer}>
        <div className={Styles.header}>
          <div className={Styles.headerContent}>
            <div className={Styles.illustration}>
          <div className={Styles.illustrationBox}>
                {/* ✅ Frontend icon */}
                <FaHtml5 className={Styles.fullstackIcon} color="#E34F26" />
              </div>
            </div>
            <div className={Styles.headerText}>
              <h2 className={Styles.title}>Frontend Engineer</h2>
              <p className={Styles.description}>
                A Frontend Engineer specializes in building user interfaces and experiences 
                for web applications. They work with HTML, CSS, JavaScript, and modern frameworks 
                like React to create fast, interactive, and user-friendly products that connect 
                design with functionality.
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
                        <p>2 hours per day scheduled weekly, usually hosted on Google Meet</p>
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
  )
}

export default Front
