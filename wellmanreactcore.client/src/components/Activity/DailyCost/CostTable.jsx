import React, { useState } from 'react';
import styles from './DailyCosts.module.css';
import CostTableRow from './CostTableRow';
import { useEffect } from 'react';

function CostTable({ dataCostTable }) {
    const tableHeaders = ['  ', 'Account Code', 'Vendor', 'Ticket', 'Amount', 'Comments', ''];
    const [loading, setLoading] = useState(true);

    const [costData, setCostData] = useState([]);


    useEffect(() => {
        if (dataCostTable)
        {  
            setCostData(dataCostTable);
            setLoading(false);
        }
    }, dataCostTable )



    return (
      <>
        {!loading &&
        
            < table className = { styles.costTable } >
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
              <th key={index} className={styles.tableHeader2}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {costData.map((row, index) => (
          <CostTableRow key={index} data={row} isEven={index % 2 === 0} />
        ))}
      </tbody>
            </table>
        }
        </>
  );
}

export default CostTable;