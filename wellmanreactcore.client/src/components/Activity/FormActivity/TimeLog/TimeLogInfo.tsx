import React from 'react';
import styles from './TimeLogComponent.module.css';

const TimeLogInfo: React.FC = () => {
    return (
        <section className={styles.timeLogInfo}>
            <div className={styles.infoHeader}>
                <h2 className={styles.infoTitle}>
                    Time Log information <span className={styles.infoResults}>(14 results)</span>
                </h2>
                <div className={styles.totalTime}>
                    <div className={styles.totalTimeLabel}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6abacb64eac25479faf5c08041b23e44ec1e8b0cded6bc7304b4f2c636a1cc93?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
                            alt=""
                            className={styles.totalTimeIcon}
                        />
                        <span>Total time:</span>
                    </div>
                    <div className={styles.totalTimeValue}>23.25 Hrs</div>
                </div>
            </div>
            <div className={styles.infoActions}>
                <button className={styles.nptButton}>NPT</button>
                <button className={styles.clearFormButton}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2c4bfda60d2751ddbc07991162d53af781d477e1caee36c6d60c4e99b3ce60?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
                        alt=""
                        className={styles.clearFormIcon}
                    />
                    <span>Clear Form</span>
                </button>
            </div>
        </section>
    );
}

export default TimeLogInfo;
