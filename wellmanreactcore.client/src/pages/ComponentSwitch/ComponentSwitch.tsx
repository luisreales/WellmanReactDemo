import PropTypes from "prop-types";
import React from "react";
import "./component-switch.css";

interface Props {
    state: "off";
    className: any;
    iconSwitchClassName: any;
    ellipseClassName: any;
}

export const ComponentSwitch = ({ state, className, iconSwitchClassName, ellipseClassName }: Props): JSX.Element => {
    return (
        <div className={`component-switch ${className}`}>
            <div className={`icon-switch ${iconSwitchClassName}`}>
                <div className={`ellipse-2 ${ellipseClassName}`} />
            </div>
        </div>
    );
};

ComponentSwitch.propTypes = {
    state: PropTypes.oneOf(["off"]),
};