import React, { useState, useEffect } from 'react';
import axiosInstance from './../../services/axios';
import styles from './WellDashboard.module.css';
import NotificationCard from './NotificationCard';
import WellDetailsCard from './WellDetailsCard';
import {
    parseWellStatus,
    convertGeographicArea,
} from "./../../utils/well/well-utils";

interface WellDashboardData {
    wellId?: string;
}
interface WellData {
    activities?: any;
    cutOrFill?: number;
    geographicArea?: string;
    ground?: number;
    kbToGround?: number;
    status?: number;
    wellBores?: any;
    wellId?: number;
    wellLicenceNumber?: number;
    wellName?: string;
}

const WellDashboard: React.FC<WellDashboardData> = ({ wellId }) => {
    const [wellDetails, setWellDetails] = useState<WellData | null>(null);
    const [loading, setLoading] = useState(false);
    const [geographic, setGeographic] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (wellId) {
            setLoading(true);
            axiosInstance.get(`/api/Well/${wellId}`)
                .then(response => {
                    setWellDetails(response.data);
                    setStatus(parseWellStatus(response.data.status));
                    setGeographic(convertGeographicArea(response.data.geographicArea))
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching well details:", error);
                    setLoading(false);
                });
        }
    }, [wellId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!wellDetails) {
        return <div>No details available for this well.</div>;
    }

    const notificationData = [
        { title: 'Bottom UWI', value: wellDetails.ground || 'N/A' },
        { title: 'License', value: wellDetails.wellLicenceNumber?.toString() || 'N/A' },
        { title: 'Operator', value: 'Logic Well Inc' },
        { title: 'Active Activities', value: wellDetails.activities?.length.toString() || '0' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.column}>
                    <div className={styles.notificationsWrapper}>
                        <div className={styles.cardGrid}>
                            {notificationData.map((notification, index) => (
                                <NotificationCard
                                    key={index}
                                    title={notification.title}
                                    value={notification.value}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <WellDetailsCard
                        surfaceUwi={wellDetails.wellLicenceNumber?.toString() || 'N/A'}
                        hierarchy={geographic || 'N/A'}
                        targetFormation={wellDetails.wellName || 'None'}
                        fluid={wellDetails.cutOrFill?.toString() || 'None'}
                        wellIdentifier={wellDetails.wellId?.toString() || 'None'}
                        nameAlias={wellDetails.wellName || 'None'}
                    />
                </div>
            </div>
        </div>
    );
};

export default WellDashboard;
