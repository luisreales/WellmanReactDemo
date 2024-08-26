import PropTypes from "prop-types";
import React from "react";
import "./menu-sidebar.css";

interface Props {
    option: "collapsed";
    className: any;
}

export const MenuSidebar = ({ option, className }: Props): JSX.Element => {
    return (
        <div className={`menu-sidebar ${className}`}>
            <div className="menu-sidebar-level">
                <div className="frame-3">
                    <div className="sidebar-menu">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon general" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="label-menu">General</div>
                                </div>
                            </div>
                            <div className="arrow" />
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon calendar" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">Activity Calendar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon oil" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">Active Equipment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon operation" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">Operation Summary</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon other well" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">Other Well Activities</div>
                                </div>
                            </div>
                            <div className="arrow">
                                <img className="icon-arrow-right" alt="Icon arrow right" />
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon form" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">Common/Essentials</div>
                                </div>
                            </div>
                            <div className="arrow">
                                <img className="icon-arrow-right" alt="Icon arrow right" />
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon planning" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">Planning</div>
                                </div>
                            </div>
                            <div className="arrow">
                                <img className="icon-arrow-right" alt="Icon arrow right" />
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">AFEs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon attachment" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">Attachments</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-4">
                            <div className="icono">
                                <img className="img-2" alt="Icon graphics" />
                            </div>
                            <div className="label">
                                <div className="label-submenu">
                                    <div className="text-wrapper">Graphics</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MenuSidebar.propTypes = {
    option: PropTypes.oneOf(["collapsed"]),
};