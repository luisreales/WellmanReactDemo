import React from "react";
import "./table-th.css";
import iconDragType02 from '../../assets/icon-drag-type-02.svg';
import iconSort24 from '../../assets/icon-sort-24px.svg';

interface TableThProps {
    border: "rounded" | "none";
    color?: "grey";
    className?: string;
    text?: string;
    frameClassName?: string;
    hasIconDragType?: boolean;
    hasFrame?: boolean;
    hasIconSort?: boolean;
}

export const TableTh: React.FC<TableThProps> = ({
    border,
    color,
    className = "",
    text = "Status",
    frameClassName = "",
    hasIconDragType = true,
    hasFrame = true,
    hasIconSort = true,
}) => {
    return (
        <div className={`table-th ${border} ${className}`}>
            {border === "rounded" && (
                <>
                    {hasIconDragType && <img className="img" alt="Icon drag type" src={iconDragType02} />}
                    {hasFrame && (
                        <div className="frame">
                            <div className="title" style={{width:200}}>Activity Name</div>
                        </div>
                    )}
                    {hasIconSort && <img className="img" alt="Icon sort" src={iconSort24 } />}
                </>
            )}

            {border === "none" && (
                <div className={`div ${frameClassName}`}>
                    <img className="img" alt="Icon drag type" src={iconDragType02} />
                    <div className="frame">
                        <div className="title">{text}</div>
                    </div>
                    <img className="img" alt="Icon sort" src={iconSort24} />
                </div>
            )}
        </div>
    );
};