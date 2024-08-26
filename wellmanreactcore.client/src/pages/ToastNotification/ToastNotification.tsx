import PropTypes from "prop-types";
import React from "react";
import "./toast-notification.css";

export const ToastNotification = ({ property1, className }) => {
    return (
        <div className={`toast-notification ${className}`}>
            <div className="notification">
                <div className="icon">
                    {/* <img className="img-2" alt="Icon info" />*/} 
                </div>
                <div className="message">
                    <div className="content">
                        <div className="message-providing-wrapper">
                            <div className="message-providing">AFE NS-6478326 is overrun</div>
                        </div>
                        <div className="view-more">
                            <div className="text-wrapper">View More</div>
                        </div>
                    </div>
                    <div className="close">
                        {/*<img className="img-2" alt="Icon close" />*/}  
                    </div>
                </div>
            </div>
        </div>
    );
};

ToastNotification.propTypes = {
    property1: PropTypes.oneOf(["warning"]),
};