import React from "react";
import "./tabs-item.css";

interface TabsItemProps {
    property1: "active" | "default";
    property2?: "small";
    textClassName?: string;
    text?: string;
    arrowClassName?: string;
    text1?: string;
    elementClassName?: string;
    hasArrow?: boolean;
}

export const TabsItem: React.FC<TabsItemProps> = ({
    property1,
    property2,
    textClassName = "",
    text = "AFEs",
    arrowClassName = "",
    text1 = "21",
    elementClassName = "",
    hasArrow = true,
}) => {
    return (
        <div className={`tabs-item ${property1}`}>
            <div className={`text ${textClassName}`}>
                <div className="tab-name">
                    {property1 === "active" ? "Activities" : text}
                </div>
            </div>
            {hasArrow && (
                <div className={`arrow ${arrowClassName}`}>
                    <div className="icon-badge">
                        <div className={`element ${elementClassName}`}>
                            {property1 === "active" ? "10" : text1}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
