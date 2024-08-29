import styles from './DailyCosts.module.css';
import CostTableRow from './DailyCostCostTableRow';

interface CostData {
    accountCode: string;
    vendor: string;
    ticket: string;
    amount: string;
    comments: string;
}

function DailyCostCostTable() {
    const tableHeaders: string[] = ['Account Code', 'Vendor', 'Ticket', 'Amount', 'Comments', ''];
    const costData: CostData[] = [
        { accountCode: '9255-604-RIG & CAMP MOVE', vendor: 'ALL Terran Services LTD.', ticket: 'N/A', amount: '1,000', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero lacus, porttitor ac quam et, pulvinar gravida tortor. Maecenas eget augue tristique nunc volutpat consectetur vitae non orci. Nulla semper, turpis et feugiat faucibus' },
        { accountCode: '9260-125-PUMPING EQUIPMENT', vendor: 'ALL Terran Services LTD.', ticket: '5754', amount: '67,000', comments: 'Nunc in velit commodo, vestibulum purus vel, ornare eros.' },
        { accountCode: '9660 - 165 - HAULING & TRASPORTA...', vendor: 'A & B INDUSTRIAL RENTALS', ticket: '2354234', amount: '54,000', comments: 'Etiam sit amet odio a ipsum tempor viverra sit amet eu lectus.' },
        { accountCode: '9255-666 TOOL RENTALS', vendor: '1009372 BC LTD', ticket: 'N/A', amount: '34,000', comments: 'Nam maximus nisl eget nunc commodo, eget semper odio sodales.' },
        { accountCode: '9260-133 RODS', vendor: '10111528 ALBERTA LTD.', ticket: 'N/A', amount: '25,000', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero lacus, porttitor ac quam et, pulvinar gravida tortor. Maecenas eget augue tristique nunc volutpat consectetur vitae non orci. Nulla semper,' },
        { accountCode: '10009372', vendor: '1058774 AB LTD. O/A', ticket: 'N/A', amount: '216,000', comments: 'Maecenas egestas erat eget tellus viverra, et dictum erat ultricies.' },
        { accountCode: '10111528 ALBERTA LTD.', vendor: 'BAZTECH LTD.', ticket: '4789', amount: '320,000', comments: 'Maecenas bibendum turpis ac tortor fringilla rutrum.' },
        { accountCode: '310-236 CASING ACCESSORIES', vendor: 'AMGAS SERVICES INC.', ticket: '1267', amount: '4,500', comments: 'Nullam ac orci accumsan, consequat metus eu.' },
        { accountCode: '3105-237-CEMENTING-PRODUCTION', vendor: 'A B SECURITY', ticket: '87467', amount: '120,000', comments: 'In id neque lobortis, vehicula turpis sagittis, mattis tellus.' },
        { accountCode: '3105-230-PWR TONGS/CASING TOOLS HCDF', vendor: '1009372 BC LTD', ticket: 'N/A', amount: '110,000', comments: 'Neque poro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit' },
        { accountCode: '3105-203-LOCATION COSTS', vendor: 'BAZRECH LTD', ticket: 'N/A', amount: '105,000', comments: 'Maecenas consequat ligula congue nisl sodales euismod.' },
        { accountCode: '3105-246-WIRELINE/SLICKLINE', vendor: '10111528 ALBERTA LTD.', ticket: '12900', amount: '38,000', comments: 'Vestibulum sodales nibh sit amet turpis varius varius.' },
        { accountCode: '10009372', vendor: '1058774 AB LTD. O/A', ticket: 'N/A', amount: '26,000', comments: 'Aliquam et leo a arcu convallis tempor sit amet at massa.' },
        { accountCode: '10111528 ALBERTA LTD.', vendor: 'BAZTECH LTD.', ticket: '23689', amount: '14,000', comments: 'Maecenas consequat ligula congue nisl sodales' },
        { accountCode: '1000567', vendor: '1058774 DC', ticket: 'N/A', amount: '76,000', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero lacus, porttitor ac quam et, pulvinar gravida tortor. Maecenas eget augue tristique nunc volutpat consectetur vitae non orci. Nulla semper, turpis et feugiat faucibus' },
        { accountCode: '1000567', vendor: '1058774 DC', ticket: 'N/A', amount: '76,000', comments: 'Semper nunc eget quam scelerisque, sit amet porta massa placerat. In sed augue eu erat scelerisque efficitur.vida tortor. Maecenas eget augue tristique nunc volutpat consectetur vitae non orci. Nulla semper, turpis et feugiat faucibus' },
    ];

    return (
        <table className={styles.costTable}>
            <thead>
                <tr style={{ backgroundColor: '#F5F8FD', border: '1px #ccc solid' }}>
                    <th style={{ padding: '25px' }} ></th>
                    {tableHeaders.map((header, index) => (
                        <th style={{ borderRight: '1px #ccc solid' }}  key={index} >{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {costData.map((row, index) => (
                    <CostTableRow key={index} data={row} isEven={index % 2 === 0} />
                ))}
            </tbody>
        </table>
    );
}

export default DailyCostCostTable;
