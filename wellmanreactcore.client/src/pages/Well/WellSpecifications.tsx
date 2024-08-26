import React from "react";
import { ComponentSwitch } from "../ComponentSwitch/ComponentSwitch";
import { MenuSidebar } from "../MenuSidebar/MenuSidebar";
import { TableCell } from "../TableCell/TableCell";
import { TableRowWellbore } from "../TableRowWellbore/TableRowWellbore";
import { TableTh } from "../TableThSpec/TableTh";
import { TabsItem } from "../TabsItemSpec/TabsItem";
import iconCalendar20 from '../../assets/Icon_Calendar-20px.svg';
import afeEstimated from '../../assets/Icon_Afe-Estimated.svg';
import activityCost20 from '../../assets/Icon_Activity-Cost-20px.svg';
import arrowLeft from '../../assets/Icon_Arrow-left.svg';
import schem24 from '../../assets/Icon_Schematics-24px.svg';
import iconInfored12 from '../../assets/Icon_InfoRed-12px.svg';
import iconSort24 from '../../assets/Icon_Sort-24px.svg';
import "./styleSpec.css";

export const WellSpecifications = (): JSX.Element => {
    return (
        <div className="activity-detail">
            <div className="pb-activity-detail">
                <div className="overlap">
                    <div className="tabs">
                        <div className="overlap-group">
                            <div className="frame-5">
                                <TabsItem className="tabs-item-instance" property1="default" property2="small" />
                                <TabsItem className="tabs-item-instance" property1="active" property2="small" />
                                <TabsItem className="tabs-item-instance" property1="default" property2="small" text="Dates" />
                                <img className="icon-infored" alt="Icon infored" src={iconInfored12 } />
                            </div>
                            <p className="last-approved-date">
                                <span className="span">Last Approved Date:</span>
                                <span className="text-wrapper-2"> Dic 28, 2023 </span>
                                <span className="span">Last Submit Date:</span>
                                <span className="text-wrapper-2"> Dic 21, 2023</span>
                            </p>
                            <p className="days-to-be-approved">
                                <span className="span">Days to be Approved:</span>
                                <span className="text-wrapper-3">&nbsp;</span>
                                <span className="text-wrapper-2">
                                    2<br />
                                </span>
                                <span className="span">Days to be Released:</span>
                                <span className="text-wrapper-3">&nbsp;</span>
                                <span className="text-wrapper-2">0</span>
                            </p>
                            <img className="line" alt="Line" src="line-99.svg" />
                            <img className="line-2" alt="Line" src="line-99.svg" />
                        </div>
                    </div>
                    <div className="days-rejected-days-wrapper">
                        <p className="days-rejected-days">
                            <span className="text-wrapper-4">Days Rejected: </span>
                            <span className="text-wrapper-5">
                                0<br />
                            </span>
                            <span className="text-wrapper-4">Days Refused: </span>
                            <span className="text-wrapper-6">0</span>
                        </p>
                    </div>
                    <div className="table-row-wellbore-2">
                        <TableCell property1="XS" property2="semibold" property3="link" property4="n-a" />
                        <TableCell property1="XS" property2="regular" property3="default" property4="light" />
                        <TableCell
                            className="table-cell-4"
                            property1="XS"
                            property2="regular"
                            property3="default"
                            property4="light"
                            text="Dic 22, 2023"
                        />
                        <TableCell
                            className="table-cell-5"
                            property1="XS"
                            property2="regular"
                            property3="default"
                            property4="light"
                            text="Review"
                        />
                    </div>
                    <div className="table-row-wellbore-3">
                        <TableCell property1="XS" property2="semibold" property3="link" property4="n-a" text1="2" />
                        <TableCell property1="XS" property2="regular" property3="default" property4="light" text="Dic 16, 2023" />
                        <TableCell
                            className="table-cell-4"
                            property1="XS"
                            property2="regular"
                            property3="default"
                            property4="light"
                            text="Dic 25, 2023"
                        />
                        <TableCell
                            className="table-cell-5"
                            property1="XS"
                            property2="regular"
                            property3="default"
                            property4="light"
                            text="Review"
                        />
                    </div>
                    <div className="table-row-wellbore-4">
                        <TableCell
                            className="table-cell-6"
                            property1="XS"
                            property2="semibold"
                            property3="link"
                            property4="n-a"
                            text1="3"
                        />
                        <TableCell property1="XS" property2="regular" property3="default" property4="light" text="Dic 17, 2023" />
                        <TableCell
                            className="table-cell-4"
                            property1="XS"
                            property2="regular"
                            property3="default"
                            property4="light"
                            text="Dic 27, 2023"
                        />
                        <TableCell
                            className="table-cell-7"
                            property1="XS"
                            property2="regular"
                            property3="default"
                            property4="light"
                            text="Review"
                        />
                    </div>
                    <div className="th">
                        <TableTh
                            border="rounded"
                            className="table-th-instance"
                            color="grey"
                            hasIconDragType={false}
                            iconSort={iconSort24 }
                            text="Day #"
                        />
                        <TableTh border="none" className="table-th-2" color="grey" hasImg={false} text1="Date"  />
                        <TableTh border="none" className="table-th-2" color="grey" hasImg={false} text1="Last Edited" />
                        <TableTh
                            border="rounded"
                            className="table-th-3"
                            color="grey"
                            hasIconDragType={false}
                            iconSort={iconSort24 }
                            text="Review"
                        />
                    </div>
                    <div className="text-wrapper-7">Days to Submit: 3</div>
                </div>
                <div className="cards-activities">
                    <div className="frame-6">
                        <div className="div-wrapper">
                            <div className="frame-7">
                                <div className="frame-8">
                                    <div className="frame-9">
                                        <div className="text-wrapper-8">Days</div>
                                        <div className="frame-10" />
                                    </div>
                                    <img className="img-3" alt="Icon calendar" src={iconCalendar20} />
                                </div>
                                <div className="frame-11">
                                    <div className="frame-12">
                                        <div className="frame-13">
                                            <div className="text-wrapper-9">Estimated</div>
                                        </div>
                                        <div className="element">19.5</div>
                                    </div>
                                    <div className="line-wrapper">
                                        <img className="line-3" alt="Line" src="line-23.svg" />
                                    </div>
                                    <div className="frame-12">
                                        <div className="frame-13">
                                            <div className="estimated">Actual</div>
                                        </div>
                                        <div className="element-2">24.6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-8">
                                    <div className="frame-9">
                                        <div className="text-wrapper-8">AFE Estimated</div>
                                        <div className="frame-10" />
                                    </div>
                                    <img className="img-3" alt="Icon afe estimated" src={afeEstimated } />
                                </div>
                                <div className="frame-11">
                                    <div className="frame-12">
                                        <div className="frame-16" />
                                        <div className="element-3">$2,596,259.83</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-notifications">
                            <div className="frame-15">
                                <div className="frame-8">
                                    <div className="frame-9">
                                        <div className="text-wrapper-8">Activity Cost</div>
                                        <div className="frame-10" />
                                    </div>
                                    <img className="img-3" alt="Icon activity cost" src={activityCost20 } />
                                </div>
                                <div className="frame-11">
                                    <div className="frame-12">
                                        <div className="frame-16" />
                                        <div className="text-wrapper-10">$2,606,591.26</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-wellbore">
                    <div className="frame-17">
                        <div className="th-2">
                            <TableTh
                                border="rounded"
                                className="table-th-4"
                                color="grey"
                                iconSort={iconSort24 }
                                text="Name Wellbore"
                            />
                            <TableTh border="none" className="table-th-5" color="grey" text1="Status" />
                            <TableTh border="none" className="table-th-6" color="grey" text1="Trajectory" />
                            <TableTh border="none" className="table-th-7" color="grey" text1="Parent Wellbore" />
                            <TableTh
                                border="rounded"
                                className="table-th-8"
                                color="grey"
                                hasFrame={false}
                                hasIconDragType={false}
                                hasIconSort={false}
                            />
                        </div>
                        <div className="body-table">
                            <TableRowWellbore property1="default" />
                            <TableRowWellbore
                                cardStatusClassName="table-row-wellbore-wide"
                                checkClassName="table-row-wellbore-instance"
                                ellipseClassName="table-row-wellbore-wide-instance"
                                property1="default"
                                requisicionesPendieClassName="table-row-wellbore-5"
                                tableCellText="Leg#1"
                                text="Producing"
                            />
                            <TableRowWellbore
                                cardStatusClassName="table-row-wellbore-wide"
                                checkClassName="table-row-wellbore-instance"
                                ellipseClassName="table-row-wellbore-wide-instance"
                                property1="default"
                                requisicionesPendieClassName="table-row-wellbore-5"
                                tableCellText="Leg#2"
                                text="Producing"
                            />
                            <TableRowWellbore property1="default" tableCellText="Leg#3" text="Active" />
                            <TableRowWellbore property1="default" tableCellText="Leg#4" text="Active" />
                        </div>
                    </div>
                </div>
                <div className="component-ttl">
                    <div className="text-wrapper-11">Wellbores</div>
                </div>
                <div className="button-open">
                    <div className="button-wrapper">
                        <div className="button">
                            <div className="icon-arrow-left-wrapper">
                                <img className="icon-arrow-left" alt="Icon arrow left" src={arrowLeft } />
                            </div>
                            <img className="icon-schematics" alt="Icon schematics" src={schem24 } />
                        </div>
                    </div>
                </div>
                <div className="component-header-ttl">
                    <div className="frame-18">
                        <div className="text-wrapper-12">General</div>
                    </div>
                </div>
                <MenuSidebar className="menu-sidebar-level2-general" option="collapsed" />
                <div className="nav-bar-top">
                    <div className="logo">
                        <div className="image-wrapper">
                            <img className="image" alt="Image" src="image-23.png" />
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="frame-19">
                            <div className="frame-19">
                                <img className="img-3" alt="Icon search" src="search-20px.svg" />
                                <div className="img-3">
                                    <div className="overlap-group-2">
                                        <img className="group" alt="Group" />
                                        <img className="dark-mode" alt="Dark mode" src="dark-mode-20px.svg" />
                                    </div>
                                </div>
                                <img className="img-3" alt="Icon" src="icon.svg" />
                                <div className="group-2" />
                            </div>
                            <div className="frame-20">
                                <div className="icon-badge">
                                    <div className="text-wrapper-13">21</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-21">
                            <div className="dropdown-profile">
                                <div className="frame-22">
                                    <div className="charlie-smith-wrapper">
                                        <div className="charlie-smith">Charles Smith</div>
                                    </div>
                                </div>
                            </div>
                            <img className="icon-notification" alt="Icon notification" src="notification-photo.svg" />
                        </div>
                    </div>
                </div>
                <div className="nav-bar-top-levela">
                    <div className="div-2">
                        <div className="div-2">
                            <div className="overlap-group-3">
                                <div className="frame-23" />
                                <div className="rectangle" />
                            </div>
                        </div>
                        <div className="group-3">
                            <div className="frame-24">
                                <div className="text-wrapper-14">Activity: Drilling (3D)</div>
                            </div>
                            <div className="activity">
                                <div className="label-activity">
                                    <div className="text-wrapper-15">WELL:</div>
                                    <div className="text-2">
                                        <div className="text-link-wrapper">
                                            <div className="text-link">RES DEMO HZ 05-26-032</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group-4" />
                        <div className="frame-25">
                            <div className="button-schematics">
                                <div className="button-wrapper">
                                    <div className="button-2">
                                        <img className="img-4" alt="Icon schematics" src="schematics-24px.svg" />
                                    </div>
                                </div>
                            </div>
                            <div className="button-location">
                                <div className="button-3">
                                    <img className="img-4" alt="Icon world" src="world-16px.svg" />
                                </div>
                            </div>
                            <button className="button-4">
                                <img className="icon-report" alt="Icon report" src="report-24px.svg" />
                                <div className="button-title">Reports</div>
                                <img className="img-4" alt="Icon caret down" src="caret-down-14px.svg" />
                            </button>
                            <button className="button-5">
                                <div className="frame-26">
                                    <img className="img-4" alt="Calendar clock" src="calendar-clock-1.svg" />
                                    <div className="button-title-2">Daily Activity</div>
                                </div>
                            </button>
                            <div className="button-more">
                                <div className="icon-more-vert">
                                    <img className="group-5" alt="Group" src="group.png" />
                                </div>
                            </div>
                        </div>
                        <img className="icon-close" alt="Icon close" src="close-30px.svg" />
                        <div className="group-6">
                            <div className="frame-27">
                                <div className="group-7">
                                    <div className="text-wrapper-16">Locked</div>
                                    <ComponentSwitch
                                        className="component-switch-instance"
                                        ellipseClassName="component-switch-3"
                                        iconSwitchClassName="component-switch-2"
                                        state="off"
                                    />
                                </div>
                            </div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-4">
                                    <div className="group-8">
                                        <div className="text-wrapper-17">Status</div>
                                    </div>
                                    <div className="group-9">
                                        <div className="card-status-2">
                                            <div className="frame-28">
                                                <div className="ico-active-wrapper">
                                                    <div className="ellipse-wrapper">
                                                        <div className="ellipse-3" />
                                                    </div>
                                                </div>
                                                <div className="requisiciones-pendie-2">Active</div>
                                            </div>
                                        </div>
                                        <img className="icon-caret-down" alt="Icon caret down" src="caret-down-14px.svg" />
                                    </div>
                                </div>
                            </div>
                            <div className="rectangle-2" />
                            <div className="rectangle-3" />
                            <div className="rectangle-4" />
                        </div>
                    </div>
                    <div className="rectangle-5" />
                </div>
            </div>
        </div>
    );
};