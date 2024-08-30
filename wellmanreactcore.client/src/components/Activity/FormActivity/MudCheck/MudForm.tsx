import { TextField } from '@mui/material';
import UnitInputWithoutControl from '../../../form/UnitInputWithoutControl';
import './MudForm.css';

const MudForm = () => {
    return (
        <div className="formContainer">
            <ul className="tabMenu">
                <li className="active">General/Rheology</li>
                <li>HTHP</li>
                <li>Solid Analysis Fann Data</li>
            </ul>

            <div className="formSection">
                <div className="formGroup">
                    <label htmlFor="mudEngineer">Mud Engineer</label>
                    <input type="text" id="mudEngineer" defaultValue="Alan Smithee" />
                </div>
                <div className="formGroup">
                    <label htmlFor="sampleLocation">Sample Location</label>
                    <input type="text" id="sampleLocation" defaultValue="Shakers" />
                </div>
                <div className="formGroup">
                    
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="mdCheck"
                        label="MD Check"
                        placeholder="MD Check"
                        unit="mKB"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="tvdCheck"
                        label="TVD Check"
                        placeholder="TVD Check"
                        unit="mKB"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="flowlineTemp"
                        label="Flowline Temperature"
                        placeholder="Flowline Temperature"
                        unit="&deg;C"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="density"
                        label="Density"
                        placeholder="Density"
                        unit="kg/m&sup3;"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="funnelViscosity"
                        label="Funnel Viscosity"
                        placeholder="Funnel Viscosity"
                        unit="s/L"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="eqCirculatingDensity"
                        label="Eq. Circulating Density"
                        placeholder="Eq. Circulating Density"
                        unit="kg/m&sup3;"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="getStrength0sec"
                        label="Get Strength (0 sec)"
                        placeholder="Get Strength (0 sec)"
                        unit="Pa"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="getStrength10sec"
                        label="Get Strength (10 sec)"
                        placeholder="Get Strength (10 sec)"
                        unit="Pa"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="getStrength10min"
                        label="Get Strength (10 min)"
                        placeholder="Get Strength (10 min)"
                        unit="Pa"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="getStrength30min"
                        label="Get Strength (30 min)"
                        placeholder="Get Strength (30 min)"
                        unit="Pa"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="ph"
                        label="pH"
                        placeholder="pH"
                        unit="ph"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="waterContent"
                        label="Water Content"
                        placeholder="Water Content"
                        unit="%"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="oilContent"
                        label="Oil Content"
                        placeholder="Oil Content"
                        unit="%"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="lostCirculationMaterial"
                        label="Lost Circulation Material"
                        placeholder="Lost Circulation Material"
                        unit="kg/m&sup3;"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="waterLoss"
                        label="Water Loss"
                        placeholder="Water Loss"
                        unit="cc"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="filterCake"
                        label="Filter Cake"
                        placeholder="Filter Cake"
                        unit="mm"
                    />
                </div>
                <div className="formGroup">
                    
                    <TextField
                        variant="outlined"
                        label="Oil/Water Ratio"
                        id="oilWaterRatio"
                        sx={{
                            minWidth: '245px',
                            paddingBottom: '0px',
                            '& .MuiInputLabel-root': {
                                color: '#CCC',
                                fontSize: '10px',
                                lineHeight: '1.5',
                                paddingTop: '0px'
                            },
                            '& .MuiOutlinedInput-input': {
                                height: '1.675em'
                            }
                        }}
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="mudAlkalinityPm"
                        label="Mud Alkalinity (Pm)"
                        placeholder="Mud Alkalinity (Pm)"
                        unit="ml/N50"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="filtrateAlkalinityPf"
                        label="Filtrate Alkalinity (Pf)"
                        placeholder="Filtrate Alkalinity (Pf)"
                        unit="ml/N50"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="filtrateAlkalinityMf"
                        label="Filtrate Alkalinity (Mf)"
                        placeholder="Filtrate Alkalinity (Mf)"
                        unit="ml/N50"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="chloride"
                        label="Chloride (CL)"
                        placeholder="Chloride (CL)"
                        unit="mg/L"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="calcium"
                        label="Calcium (Ca++)"
                        placeholder="Calcium (Ca++)"
                        unit="mg/L"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="excessLime"
                        label="Excess Lime"
                        placeholder="Excess Lime"
                        unit="kg/m&sup3;"
                    />
                </div>
                <div className="formGroup">
                    <UnitInputWithoutControl
                        name="electricStability"
                        label="Electric Stability"
                        placeholder="Electric Stability"
                        unit="volt"
                    />
                </div>
            </div>

            <div className="formButtons">
                <button className="discardButton">Discard</button>
                <button className="saveButton">Save</button>
            </div>
        </div>
    );
};

export default MudForm;
