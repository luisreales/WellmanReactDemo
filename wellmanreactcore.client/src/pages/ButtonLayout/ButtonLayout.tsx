import React from "react";
import "./button-layout.css";
import rectangle from '../../assets/rectangle-353.svg';
import line88 from '../../assets/line-88.svg';
import iconList from '../../assets/icon-list.svg';
import iconGrid from '../../assets/icon-grid.svg';


interface ButtonLayoutProps {
    status: "default";
    type: "list";
}

export const ButtonLayout: React.FC<ButtonLayoutProps> = ({ status, type }) => {
    return (
        <div className="button-layout">
            <div className="overlap-group">
                <img className="rectangle" alt="Rectangle" src={rectangle} />
                <img className="icon-list" alt="Icon list" src={iconList} />
                <img className="line" alt="Line" src={line88 } />
            </div>
            <img className="icon-grid" alt="Icon grid" src={iconGrid} />
        </div>
    );
};