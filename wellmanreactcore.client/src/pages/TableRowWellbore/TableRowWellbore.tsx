import PropTypes from "prop-types";
import React from "react";
import { TableCell } from "../TableCell/TableCell";
import "./table-row-wellbore.css";

interface Props {
    property1: "default";
    tableCellText: string;
    cardStatusClassName: any;
    checkClassName: any;
    ellipseClassName: any;
    requisicionesPendieClassName: any;
    text: string;
}

export const TableRowWellbore = ({
    property1,
    tableCellText = "Original Wellbore",
    cardStatusClassName,
    checkClassName,
    ellipseClassName,
    requisicionesPendieClassName,
    text = "Active",
}: Props): JSX.Element => {
    return (
        <div className="table-row-wellbore">
            <TableCell
                className="table-cell-instance"
                property1="XS"
                property2="semibold"
                property3="link"
                property4="n-a"
                text1={tableCellText}
                textCellTableClassName="design-component-instance-node"
            />
            <div className="table-cell-status">
                <div className={`card-status ${cardStatusClassName}`}>
                    <div className="frame-2">
                        <div className={`check ${checkClassName}`}>
                            <div className="ico-active">
                                <div className={`ellipse ${ellipseClassName}`} />
                            </div>
                        </div>
                        <div className={`requisiciones-pendie ${requisicionesPendieClassName}`}>{text}</div>
                    </div>
                </div>
            </div>
            <TableCell
                className="table-cell-2"
                property1="XS"
                property2="regular"
                property3="default"
                property4="light"
                text="Horizontal"
            />
            <TableCell
                className="table-cell-3"
                property1="XS"
                property2="regular"
                property3="default"
                property4="light"
                text="None"
            />
       
        </div>
    );
};

TableRowWellbore.propTypes = {
    property1: PropTypes.oneOf(["default"]),
    tableCellText: PropTypes.string,
    text: PropTypes.string,
};