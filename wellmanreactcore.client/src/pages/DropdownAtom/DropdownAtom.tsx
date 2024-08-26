import React from "react";
import "./dropdown-atom.css";
import iconCaretDown from '../../assets/icon-caret-down-16px.svg';
interface DropdownAtomProps {
    property1: "default";
    property2: "sm";
    className?: string;
    dropdownClassName?: string;
    text?: string;
    hasIconCaretDown?: boolean;
    iconCaretDownClassName?: string;
}

export const DropdownAtom: React.FC<DropdownAtomProps> = ({
    property1,
    property2,
    className = "",
    dropdownClassName = "",
    text = "10",
    hasIconCaretDown = true,
    iconCaretDownClassName = "",
}) => {
    return (
        <div className={`dropdown-atom ${className}`}>
            <div className={`dropdown ${dropdownClassName}`}>{text}</div>
            {hasIconCaretDown && (
                <img
                    className={`icon-caret-down ${iconCaretDownClassName}`}
                    alt="Icon caret down"
                    src={iconCaretDown}
                />
            )}
        </div>
    );
};