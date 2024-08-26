import PropTypes from "prop-types";
import React from "react";
import "./table-cell.css";

interface Props {
    property1: "XS";
    property2: "regular" | "semibold";
    property3: "link" | "default";
    property4: "n-a" | "light";
    className: any;
    text: string;
    text1: string;
    textCellTableClassName: any;
}

export const TableCell = ({
    property1,
    property2,
    property3,
    property4,
    className,
    text = "Dic 15, 2023",
    text1 = "1",
    textCellTableClassName,
}: Props): JSX.Element => {
    return (
        <div className={`table-cell ${property2} ${className}`}>
            <div className={`text-cell-table ${textCellTableClassName}`}>
                {property2 === "semibold" && <>{text1}</>}

                {property2 === "regular" && <>{text}</>}
            </div>
        </div>
    );
};

TableCell.propTypes = {
    property1: PropTypes.oneOf(["XS"]),
    property2: PropTypes.oneOf(["regular", "semibold"]),
    property3: PropTypes.oneOf(["link", "default"]),
    property4: PropTypes.oneOf(["n-a", "light"]),
    text: PropTypes.string,
    text1: PropTypes.string,
};