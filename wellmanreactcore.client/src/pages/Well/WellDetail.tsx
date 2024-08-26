
import React from "react"; 
import { ButtonLayout } from "../ButtonLayout/ButtonLayout";
import { DropdownAtom } from "../DropdownAtom/DropdownAtom";
import { TableTh } from "../TableTh/TableTh";
import { TabsItem } from "../TabsItem/TabsItem";
import { ToastNotification } from "../ToastNotification/ToastNotification";
import iconArrowBack from '../../assets/icon-arrow-back24pxx.svg'
import iconPlus from '../../assets/Icon_Plus-20px.svg';
import iconCaretDown from '../../assets/icon-caret-down-16px.svg';
import iconWorld from '../../assets/icon-world-16px.svg';
import imgGroup from '../../assets/group.png';
import checkOneIcon from '../../assets/check-1.svg';
import iconRestore from '../../assets/icon-restore.svg';

import "./styleDetail.css";


const WellDetail: React.FC = () => {

  return (


      <div className="well-detail">
          <div className="p-well-detail-tab">
              <div className="content-2">
                  <div className="frame-2">
                      <TabsItem property1="active" property2="small" />
                      <TabsItem property1="default" property2="small" />
                      <TabsItem
                          arrowClassName="design-component-instance-node"
                          property1="default"
                          property2="small"
                          text="Wellbore"
                          text1="24"
                          textClassName="tabs-item-instance"
                      />
                      <TabsItem property1="default" property2="small" text="Pads" text1="21" />
                      <TabsItem elementClassName="tabs-item-2" property1="default" property2="small" text="Pipelines" text1="8" />
                      <TabsItem
                          elementClassName="tabs-item-2"
                          property1="default"
                          property2="small"
                          text="Facilities"
                          text1="8"
                      />
                      <TabsItem hasArrow={false} property1="default" property2="small" text="Well Details" />
                  </div>
                  <div className="frame-3">
                      <div className="frame-4">
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Drilling (3D)</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="card-status">
                                          <div className="frame-6">
                                              <div className="check">
                                                  <div className="ico-active">
                                                      <div className="ellipse" />
                                                  </div>
                                              </div>
                                              <div className="requisiciones-pendie">Active</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">N/A</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">XDR170005</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Nov 30, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Dic 11, 2023</div>
                                  </div>

                              </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Workover</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="card-status">
                                          <div className="frame-6">
                                              <div className="check">
                                                  <div className="ico-active">
                                                      <div className="ellipse" />
                                                  </div>
                                              </div>
                                              <div className="requisiciones-pendie">Active</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">WorkOver Completion</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">D75643</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Ago 25, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Nov 16, 2023</div>
                                  </div>

                              </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Completion (2D)</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="card-status">
                                          <div className="frame-6">
                                              <div className="check">
                                                  <div className="ico-active">
                                                      <div className="ellipse" />
                                                  </div>
                                              </div>
                                              <div className="requisiciones-pendie">Active</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">Initial Frac</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">6789</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Jul 14, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Nov 22, 2023</div>
                                  </div>

                              </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Construction-1</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="frame-wrapper">
                                          <div className="frame-6">
                                              <img className="check-2" alt="Check" src={checkOneIcon} />
                                              <div className="status">Completed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">M25252</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Ago 8, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Sept 4, 2023</div>
                                  </div>

                              </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Initial Drilling</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="frame-wrapper">
                                          <div className="frame-6">
                                              <img className="check-2" alt="Check" src={checkOneIcon} />
                                              <div className="status">Completed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">N/A</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">C75643</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Jun 12, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Nov 17, 2023</div>
                                  </div>
   
                                 </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Drilling 2</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="frame-wrapper">
                                          <div className="frame-6">
                                              <img className="check-2" alt="Check" src={checkOneIcon} />
                                              <div className="status">Completed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">C98765</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Jun 18, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Jul 16, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Nov 9, 2023</div>
                                  </div>
      
                              </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Workover 1</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="frame-wrapper">
                                          <div className="frame-6">
                                              <img className="check-2" alt="Check" src={checkOneIcon} />
                                              <div className="status">Completed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">C98765</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Jun 18, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Jul 16, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Nov 9, 2023</div>
                                  </div>
                      
                              </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Reclamation</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="frame-wrapper">
                                          <div className="frame-6">
                                              <img className="check-2" alt="Check" src={checkOneIcon} />
                                              <div className="status">Completed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">C98765</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Jun 18, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Jul 16, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Nov 9, 2023</div>
                                  </div>
                              
                              </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Cleanup</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="frame-wrapper">
                                          <div className="frame-6">
                                              <img className="check-2" alt="Check" src={checkOneIcon} />
                                              <div className="status">Completed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">D75643</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Jun 09, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Jul 16, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Nov 9, 2023</div>
                                  </div>
            
                              </div>
                          </div>
                          <div className="table-well-row">
                              <div className="frame-5">
                                  <div className="table-cell">
                                      <div className="text-cell-table">Construction</div>
                                  </div>
                                  <div className="component-table-cell">
                                      <div className="frame-wrapper">
                                          <div className="frame-6">
                                              <img className="check-2" alt="Check" src={checkOneIcon} />
                                              <div className="status">Completed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="text-cell-tables-wrapper">
                                      <div className="text-cell-tables">None</div>
                                  </div>
                                  <div className="div-wrapper">
                                      <div className="text-cell-tables-2">D75643</div>
                                  </div>
                                  <div className="table-cell-2">
                                      <div className="text-cell-tables-2">Jun 05, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Jul 16, 2023</div>
                                  </div>
                                  <div className="table-cell-3">
                                      <div className="text-cell-tables">Nov 9, 2023</div>
                                  </div>
                
                              </div>
                          </div>
                      </div>
                      <div className="group">
                          <div className="frame-7">
                              <TableTh border="rounded" color="grey" />
                              <TableTh border="none" color="grey" />
                              <TableTh border="none" className="table-th-instance" color="grey" text="Job Type" />
                              <TableTh border="none" className="table-th-2" color="grey" text="AFE#" />
                              <TableTh border="none" color="grey" text="Star Date" />
                              <TableTh border="none" className="table-th-3" color="grey" text="End Date" />
                              <TableTh
                                  border="none"
                                  className="table-th-3"
                                  color="grey"
                                  frameClassName="table-th-4"
                                  text="Last Report"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="group-2">
                      <div className="component-header-ttl">
                          <div className="overlap-group-2">
                              <div className="frame-8">
                                  <div className="text-wrapper-2">General Information</div>
                              </div>
                          </div>
                      </div>
                      <div className="group-3">
                          <div className="overlap">
                              <div className="overlap-2">
                                  <div className="group-4">
                                      <div className="text-wrapper-3">Hierarchy:</div>
                                      <p className="p">Region / Province / Gordondale / Gordondale / Montney</p>
                                  </div>
                                  <div className="group-5">
                                      <div className="text-wrapper-3">Well Identifier (CWIS):</div>
                                      <div className="text-wrapper-4">None</div>
                                  </div>
                                  <div className="divider" />
                                  <div className="group-6">
                                      <p className="surface-UWI">
                                          <span className="span">Surface UWI:</span>
                                          <span className="text-wrapper-5">&nbsp;</span>
                                      </p>
                                      <div className="text-wrapper-6"></div>
                                  </div>
                                  <div className="group-7">
                                      <div className="text-wrapper-3">Fluid:</div>
                                      <div className="text-wrapper-6">None</div>
                                  </div>
                                  <div className="divider-2" />
                                  <div className="group-8">
                                      <div className="text-wrapper-3">Target Formation:</div>
                                      <div className="text-wrapper-7">Cummings Ss.</div>
                                  </div>
                                  <img className="line-2" alt="Line" src="line-98.svg" />
                                  <div className="scroll-cell" />
                              </div>
                              <div className="group-9">
                                  <div className="text-wrapper-3">Name Alias:</div>
                                  <div className="text-wrapper-4">None</div>
                              </div>
                          </div>
                          <div className="overlap-3">
                              <div className="divider-3" />
                              <div className="tab-name-wrapper">
                                  <div className="tab-name-2">Well Details</div>
                              </div>
                          </div>
                      </div>
                      <div className="group-10">
                          <div className="card-notifications">
                              <div className="frame-9">
                                  <div className="frame-10">
                                      <div className="daily-operations-wrapper">
                                          <div className="daily-operations">Bottom UWI</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="frame-11">
                                  <div className="frame-12">
                                      <div className="frame-13">
                                          <div className="element-wrapper">
                                              <div className="element-2">100/05-26-032-09W4/00</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="card-notifications-2">
                              <div className="frame-9">
                                  <div className="frame-10">
                                      <div className="daily-operations-wrapper">
                                          <div className="daily-operations">Operator</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="frame-11">
                                  <div className="frame-12">
                                      <div className="frame-13">
                                          <div className="element-wrapper">
                                              <div className="element-2">Logic Well Inc</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="card-notifications-3">
                              <div className="frame-9">
                                  <div className="frame-10">
                                      <div className="daily-operations-wrapper">
                                          <div className="daily-operations">License</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="frame-11">
                                  <div className="frame-12">
                                      <div className="frame-13">
                                          <div className="element-wrapper">
                                              <div className="element-2">0216639</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="card-notifications-4">
                              <div className="frame-9">
                                  <div className="frame-10">
                                      <div className="daily-operations-wrapper">
                                          <div className="daily-operations">Active Actitivities</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="frame-11">
                                  <div className="frame-12">
                                      <div className="frame-13">
                                          <div className="element-wrapper">
                                              <div className="element-2">12</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="group-11">
                      <div className="component-paginador">
                          <div className="overlap-group-3">
                              <div className="group-12">
                                  <img className="icon-arrow-right" alt="Icon arrow right" src="arrow-right-24px.svg" />
                                  <img className="icon-arrow-left" alt="Icon arrow left" src="arrow-left-24px.svg" />
                              </div>
                              <DropdownAtom
                                  className="dropdown-atom-instance"
                                  dropdownClassName="dropdown-atom-2"
                                  hasIconCaretDown={false}
                                  property1="default"
                                  property2="sm"
                                  text="1"
                              />
                              <div className="text-wrapper-8">of 10</div>
                          </div>
                          <div className="group-13">
                              <div className="group-14">
                                  <div className="text-wrapper-9">Show</div>
                              </div>
                              <DropdownAtom
                                  className="dropdown-atom-4"
                                  iconCaretDownClassName="dropdown-atom-3"
                                  property1="default"
                                  property2="sm"
                                  text="10"
                              />
                          </div>
                      </div>
                      <img className="icon-restore" alt="Icon restore" src={iconRestore} />
                  </div>
                  <div className="views">
                      <div className="group-15">
                          <div className="frame-14">
                              <div className="group-16">
                                  <div className="text-wrapper-10">Show</div>
                              </div>
                              <DropdownAtom property1="default" property2="sm" text="10" />
                          </div>
                      </div>
                      <ButtonLayout status="default" type="list" />
                  </div>
              </div>
              <ToastNotification className="toast-notification-instance" property1="warning" />
              <div className="nav-bar-top">
                  <div className="overlap-4">
                      <div className="divider-4" />
                      <div className="overlap-group-wrapper">
                          <div className="overlap-group-4">
                              <img className="icon-arrow" alt="Icon arrow" src={iconArrowBack} />
                              <div className="text-wrapper-11">WELL</div>
                              <div className="overlap-5">
                                  <div className="text-wrapper-12">RES DEMO HZ 05-26-032</div>
                                  <div className="group-17">
                                      <div className="group-18">
                                          <div className="card-status-2">
                                              <div className="frame-6">
                                                  <div className="check">
                                                      <div className="ico-active">
                                                          <div className="ellipse-2" />
                                                      </div>
                                                  </div>
                                                  <div className="requisiciones-pendie-2">Active</div>
                                              </div>
                                          </div>
                                          <div className="text-wrapper-13">Status</div>
                                      </div>
                                      <img className="line-3" alt="Line" src="line-97.svg" />
                                  </div>
                              </div>
                              <div className="text-2">{""}</div>
                              <div className="frame-15">
                                  <button className="button">
                                      <img className="icon-plus" alt="Icon plus" src={iconPlus} />
                                      <button className="button-title">Create</button>
                                      <img className="img-4" alt="Icon caret down" src={iconCaretDown} />
                                  </button>
                                  <div className="button-2">
                                      <img className="img-4" alt="Icon world" src={iconWorld} />
                                  </div>
                                  <div className="button-more">
                                      <div className="icon-more-vert">
                                          <img className="group-19" alt="Group" src={imgGroup} />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            
   
          </div>
      </div>
  );
}

export default WellDetail;