import React from "react";
import styles from './DailyActivity.module.css';
import DateInputComponent from "../../form/DateInputComponent";

const WorkDay: React.FC = () => {
  return (
    <section className={styles.workDay}>
      <div className={styles.dateSelector}>
        <label htmlFor="workDate" className={styles.label}>Work Day</label>
        {/*<div className={styles.dropdownAtom}>*/}
        {/*  <input type="text" id="workDate" value="June 14, 2024" readOnly className={styles.dateInput} />*/}
        {/*  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd6b6c52788c6b66e246aade9be81524a647891f53211f4bf444ddf8e081377c?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="Open calendar" className={styles.calendarIcon} />*/}
              {/*</div>*/}
              <DateInputComponent />
      </div>
      <div className={styles.userIcons}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ab639473da6d8e993a2c4b41168feb336e84f9ee7962f2d94b65149aa7bff35?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="User avatar" className={styles.avatar} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/964b2c43e259b047077f316982c0ff4afdbcb61d2a80ea5db96c824c3a3cf9b9?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="Additional user" className={styles.additionalUser} />
      </div>
    </section>
  );
}

export default WorkDay;
