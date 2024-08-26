import PropTypes from "prop-types";
import React from "react";
import "./tabs-item.css";

interface Props {
    property1: "active" | "default";
    property2: "small";
    className: any;
    text: string;
}

export const TabsItem = ({ property1, property2, className, text = "Activity Detail" }: Props): JSX.Element => {
    return (
        <div className={`tabs-item ${property1} ${className}`}>
            <div className="text">
                <div className="tab-name">
                    {property1 === "default" && <>{text}</>}

                    {property1 === "active" && <>Submission Status</>}
                </div>
            </div>
        </div>
    );
};

TabsItem.propTypes = {
    property1: PropTypes.oneOf(["active", "default"]),
    property2: PropTypes.oneOf(["small"]),
    text: PropTypes.string,
};