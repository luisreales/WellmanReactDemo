import React from 'react';
import styles from './DailyCosts.module.css';





function EntryForm() {


    const accountCodesSelect = [{ id: 1, name: '9255-666 TOOL RENTALS' }, { id: 2, name: '3105-237-CEMENTING-PRODUCTION' }, { id: 3, name: '3105-246-WIRELINE/SLICKLINE' },
                                { id: 4, name: '9260-133 RODS' }, { id: 5, name: '9260-125-PUMPING EQUIPMENT' }]


    const vendorsSelect = [{ id: 1, name: 'ALL Terran Services LTD' }, { id: 2, name: 'A B SECURITY' }, { id: 3, name: 'BAZRECH LTD' },
        { id: 4, name: '10111528 ALBERTA LTD' }, { id: 5, name: '1009372 BC LTD' }]


  return (
    <form className={styles.entryForm}>
      <div className={styles.formLine} />
      <div className={styles.formContent}>
        <div className={styles.formFields}>
          <div className={styles.formField1}>
            <label htmlFor="accountCode" className={styles.fieldLabel}>
              Account Code <span className={styles.requiredAsterisk}>*</span>
            </label>
            <select id="accountCode" className={styles.fieldInput} required>
              <option value="">Select</option>
                {accountCodesSelect.map((code, index) => (
                    <option key={index} value={code.id}>{code.name}</option>
                ))}
            </select>
          </div>
           <div className={styles.formField2}>
            <label htmlFor="vendor" className={styles.fieldLabel}>
              Select Vendor <span className={styles.requiredAsterisk}>*</span>
            </label>
            <select id="vendor" className={styles.fieldInput} required>
                 <option value="">Select</option>
                {vendorsSelect.map((code, index) => (
                    <option key={index} value={code.id}>{code.name}</option>
                ))}
            </select>
           </div>

          <div className={styles.formField3}>
            <label htmlFor="ticket" className={styles.fieldLabel}>Ticket</label>
            <input id="ticket" type="text" className={styles.fieldInput} placeholder="Add" />
          </div>
          <div className={styles.formField4}>
            <label htmlFor="amount" className={styles.fieldLabel}>
              Amount <span className={styles.requiredAsterisk}>*</span>
            </label>
            <input id="amount" type="number" className={styles.fieldInput} placeholder="Add" required />
          </div>
          <div className={styles.formField5}>
            <label htmlFor="comments" className={styles.fieldLabel}>Comments</label>
            <textarea id="comments" className={styles.fieldInput} placeholder="Add Comment" />
          </div>
        </div>
        <button type="submit" className={styles.addButton}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c38b19d37deb99b5eb943603f8758cc88a0be9c9c5a6fe9d89de4d1a825b638b?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.addIcon} />
          ADD
        </button>
      </div>
    </form>
  );
}

export default EntryForm;