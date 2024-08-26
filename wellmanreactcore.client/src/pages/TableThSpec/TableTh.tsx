import PropTypes from "prop-types";
import React from "react";
import "./table-th.css";
import iconSort24 from '../../assets/Icon_Sort-24px.svg';

interface Props {
    border: "rounded" | "none";
    color: "grey";
    className: any;
    hasIconDragType: boolean;
    text: string;
    iconSort: string;
    hasImg: boolean;
    text1: string;
    hasFrame: boolean;
    hasIconSort: boolean;
}

export const TableTh = ({
    border,
    color,
    className,
    hasIconDragType = true,
    text = "Name Wellbore",
    iconSort =  iconSort24 ,
    hasImg = true,
    text1 = "Status",
    hasFrame = true,
    hasIconSort = true,
}: Props): JSX.Element => {
    return (
        <div className={`table-th ${border} ${className}`}>
            {border === "rounded" && (
                <>
                    <>{hasIconDragType && <img className="img" alt="Icon drag type" src={iconSort} />}</>
                    <>
                        {hasFrame && (
                            <div className="frame">
                                <div className="title">{text}</div>
                            </div>
                        )}
                    </>
                    <>{hasIconSort && <img className="img" alt="Icon sort" src={iconSort} />}</>
                </>
            )}

            {border === "none" && (
                <div className="div">
                    {hasImg && <img className="img" alt="Icon drag type" src={iconSort} />}

                    <div className="frame">
                        <div className="title">{text1}</div>
                    </div>
                    <img className="img" alt="Icon sort" src={iconSort}  />
                </div>
            )}
        </div>
    );
};

TableTh.propTypes = {
    border: PropTypes.oneOf(["rounded", "none"]),
    color: PropTypes.oneOf(["grey"]),
    hasIconDragType: PropTypes.bool,
    text: PropTypes.string,
    iconSort: PropTypes.string,
    hasImg: PropTypes.bool,
    text1: PropTypes.string,
    hasFrame: PropTypes.bool,
    hasIconSort: PropTypes.bool,
};