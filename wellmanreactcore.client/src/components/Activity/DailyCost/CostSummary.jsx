import React from 'react';
import styles from './DailyCosts.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

function CostSummary({ dataSummary }) {

  const [costItems, setCostItems]  = useState([ 
    { label: 'Costs Today', value: '$ ' },
    { label: 'All Costs Today', value: '$ ' },
    { label: 'Cum Costs', value: '$ ' },
    { label: 'Cum All Costs', value: '$ ' },
    { label: 'AFE Amount', value: '$ ' },
    { label: 'AFE Variance', value: '$ ' },
  ]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (dataSummary)
        {
            setCostItems([
                { label: 'Costs Today', value: '$ ' + dataSummary.costsToday },
                { label: 'All Costs Today', value: '$ ' + dataSummary.allCostsToday },
                { label: 'Cum Costs', value: '$ ' + dataSummary.cumCosts },
                { label: 'Cum All Costs', value: '$ ' + dataSummary.cumAllCosts },
                { label: 'AFE Amount', value: '$ ' + dataSummary.AFEAmount },
                { label: 'AFE Variance', value: '$ ' + dataSummary.AFEVariance },
            ])
            setLoading(false);
        }

    }, dataSummary)


    return (
        <>
    {  !loading &&  
    <section className={styles.costSummaryContainer}>
      {costItems.map((item, index) => (
        <div key={index} className={styles.costItem}>
          <p className={styles.costLabel}>{item.label}</p>
          <p className={styles.costValue}>{item.value}</p>
        </div>
      ))}
          <div className={styles.estimatedCostContainer}>
    
                
                      <label htmlFor="estimatedCost" className={styles.estimatedCostTd} >
                       Estimated<br />Final Cost
                      </label>
                 
       
        <input
          id="estimatedCost"
          type="text"
          className={styles.estimatedCostInput}
          placeholder="Enter a value"
           />
       
       
      </div>
                </section>}
        </>
  );
}

export default CostSummary;